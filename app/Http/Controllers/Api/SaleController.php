namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Sale;
use App\Models\Inventory;
use App\Models\ProductBatch;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SaleController extends Controller
{
    public function index()
    {
        return response()->json(Sale::with(['user', 'customer', 'items.product'])->orderBy('sale_date', 'desc')->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'customer_id' => 'nullable|exists:customers,customer_id',
            'sale_date' => 'required|date',
            'payment_method' => 'required|string',
            'items' => 'required|array|min:1',
            'items.*.product_id' => 'required|exists:products,product_id',
            'items.*.quantity' => 'required|integer|min:1',
            'items.*.price' => 'required|numeric|min:0',
        ]);

        return DB::transaction(function () use ($validated, $request) {
            $totalAmount = collect($request->items)->sum(fn($item) => $item['quantity'] * $item['price']);

            $sale = Sale::create([
                'user_id' => $request->user()->user_id,
                'customer_id' => $validated['customer_id'],
                'sale_date' => $validated['sale_date'],
                'total_amount' => $totalAmount,
                'payment_method' => $validated['payment_method'],
            ]);

            foreach ($validated['items'] as $item) {
                $sale->items()->create([
                    'product_id' => $item['product_id'],
                    'quantity' => $item['quantity'],
                    'price' => $item['price'],
                ]);

                // Update Inventory (Deduct stock)
                $inventory = Inventory::where('product_id', $item['product_id'])->first();
                if (!$inventory || $inventory->quantity < $item['quantity']) {
                    throw new \Exception("Insufficient stock for product ID: " . $item['product_id']);
                }
                $inventory->quantity -= $item['quantity'];
                $inventory->last_updated = now();
                $inventory->save();

                // Deduct from batches (FEFO - First Expiry First Out)
                $batches = ProductBatch::where('product_id', $item['product_id'])
                    ->where('quantity', '>', 0)
                    ->orderBy('expiration_date', 'asc')
                    ->get();
                
                $remainingToDeduct = $item['quantity'];
                foreach ($batches as $batch) {
                    if ($remainingToDeduct <= 0) break;
                    
                    $deductFromThisBatch = min($batch->quantity, $remainingToDeduct);
                    $batch->quantity -= $deductFromThisBatch;
                    $batch->save();
                    $remainingToDeduct -= $deductFromThisBatch;
                }
            }

            return response()->json($sale->load(['user', 'customer', 'items.product']), 201);
        });
    }

    public function show(Sale $sale)
    {
        return response()->json($sale->load(['user', 'customer', 'items.product']));
    }
}

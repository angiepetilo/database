namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PurchaseOrder;
use App\Models\Inventory;
use App\Models\ProductBatch;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PurchaseController extends Controller
{
    public function index()
    {
        return response()->json(PurchaseOrder::with(['supplier', 'items.product'])->orderBy('purchase_date', 'desc')->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'supplier_id' => 'required|exists:suppliers,supplier_id',
            'purchase_date' => 'required|date',
            'items' => 'required|array|min:1',
            'items.*.product_id' => 'required|exists:products,product_id',
            'items.*.quantity' => 'required|integer|min:1',
            'items.*.unit_price' => 'required|numeric|min:0',
            'items.*.expiration_date' => 'required|date|after:today',
        ]);

        return DB::transaction(function () use ($validated) {
            $purchaseOrder = PurchaseOrder::create([
                'supplier_id' => $validated['supplier_id'],
                'purchase_date' => $validated['purchase_date'],
                'status' => 'Received', // Assuming immediate receipt for now
            ]);

            $totalAmount = 0;

            foreach ($validated['items'] as $item) {
                $purchaseOrder->items()->create([
                    'product_id' => $item['product_id'],
                    'quantity' => $item['quantity'],
                    'unit_price' => $item['unit_price'],
                ]);

                $totalAmount += ($item['quantity'] * $item['unit_price']);

                // Update Inventory
                $inventory = Inventory::firstOrCreate(
                    ['product_id' => $item['product_id']],
                    ['quantity' => 0]
                );
                $inventory->quantity += $item['quantity'];
                $inventory->last_updated = now();
                $inventory->save();

                // Create Product Batch
                ProductBatch::create([
                    'product_id' => $item['product_id'],
                    'quantity' => $item['quantity'],
                    'expiration_date' => $item['expiration_date'],
                    'received_date' => $validated['purchase_date'],
                ]);
            }

            $purchaseOrder->update(['total_amount' => $totalAmount]);

            return response()->json($purchaseOrder->load(['supplier', 'items.product']), 201);
        });
    }

    public function show(PurchaseOrder $purchaseOrder)
    {
        return response()->json($purchaseOrder->load(['supplier', 'items.product']));
    }
}

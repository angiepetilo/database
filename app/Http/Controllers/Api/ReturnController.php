namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ProductReturnModel;
use App\Models\Inventory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReturnController extends Controller
{
    public function index()
    {
        return response()->json(ProductReturnModel::with(['sale', 'product'])->orderBy('return_date', 'desc')->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'sale_id' => 'required|exists:sales,sale_id',
            'product_id' => 'required|exists:products,product_id',
            'quantity' => 'required|integer|min:1',
            'reason' => 'nullable|string',
            'return_date' => 'required|date',
        ]);

        return DB::transaction(function () use ($validated) {
            $return = ProductReturnModel::create($validated);

            // Restore Inventory
            $inventory = Inventory::where('product_id', $validated['product_id'])->first();
            if ($inventory) {
                $inventory->quantity += $validated['quantity'];
                $inventory->last_updated = now();
                $inventory->save();
            }

            return response()->json($return->load(['sale', 'product']), 201);
        });
    }

    public function show($id)
    {
        return response()->json(ProductReturnModel::with(['sale', 'product'])->findOrFail($id));
    }
}

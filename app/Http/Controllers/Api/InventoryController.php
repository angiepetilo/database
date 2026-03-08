namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Inventory;
use App\Models\ProductBatch;
use Illuminate\Http\Request;

class InventoryController extends Controller
{
    public function index()
    {
        return response()->json(Inventory::with('product.category')->get());
    }

    public function show($id)
    {
        $inventory = Inventory::with(['product.batches'])->where('product_id', $id)->firstOrFail();
        return response()->json($inventory);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'quantity' => 'required|integer',
            'type' => 'required|in:add,subtract,set',
            'reason' => 'nullable|string'
        ]);

        $inventory = Inventory::where('product_id', $id)->firstOrFail();

        if ($validated['type'] === 'add') {
            $inventory->quantity += $validated['quantity'];
        } elseif ($validated['type'] === 'subtract') {
            $inventory->quantity -= $validated['quantity'];
        } else {
            $inventory->quantity = $validated['quantity'];
        }

        $inventory->last_updated = now();
        $inventory->save();

        return response()->json($inventory);
    }

    public function batches($productId)
    {
        $batches = ProductBatch::where('product_id', $productId)->orderBy('expiration_date', 'asc')->get();
        return response()->json($batches);
    }
}

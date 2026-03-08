namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return response()->json(Product::with(['category', 'inventory'])->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'category_id' => 'required|exists:categories,category_id',
            'product_name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'barcode' => 'required|string|unique:products',
            'price' => 'required|numeric|min:0',
        ]);

        $product = Product::create($validated);
        
        // Initialize inventory
        $product->inventory()->create(['quantity' => 0]);

        return response()->json($product->load(['category', 'inventory']), 201);
    }

    public function show(Product $product)
    {
        return response()->json($product->load(['category', 'inventory', 'productUnits.unit']));
    }

    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'category_id' => 'required|exists:categories,category_id',
            'product_name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'barcode' => 'required|string|unique:products,barcode,' . $product->product_id . ',product_id',
            'price' => 'required|numeric|min:0',
        ]);

        $product->update($validated);
        return response()->json($product->load(['category', 'inventory']));
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(null, 204);
    }
}

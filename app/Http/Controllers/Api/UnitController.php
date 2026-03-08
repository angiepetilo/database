namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Unit;
use Illuminate\Http\Request;

class UnitController extends Controller
{
    public function index()
    {
        return response()->json(Unit::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'unit_name' => 'required|string|max:255|unique:units',
        ]);

        $unit = Unit::create($validated);
        return response()->json($unit, 201);
    }

    public function show(Unit $unit)
    {
        return response()->json($unit);
    }

    public function update(Request $request, Unit $unit)
    {
        $validated = $request->validate([
            'unit_name' => 'required|string|max:255|unique:units,unit_name,' . $unit->unit_id . ',unit_id',
        ]);

        $unit->update($validated);
        return response()->json($unit);
    }

    public function destroy(Unit $unit)
    {
        $unit->delete();
        return response()->json(null, 204);
    }
}

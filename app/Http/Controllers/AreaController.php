<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Area;

class AreaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Area::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string'
        ]);

        $area = Area::create($request->all());

        return response()->json([
            'message' => 'Área creada exitosamente',
            'data' => $area
        ], 210); // status or 201
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $area = Area::find($id);
        if (!$area) {
            return response()->json(['message' => 'Área no encontrada'], 404);
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string'
        ]);

        $area->update($request->all());

        return response()->json([
            'message' => 'Área actualizada exitosamente',
            'data' => $area
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $area = Area::find($id);
        if (!$area) {
            return response()->json(['message' => 'Área no encontrada'], 404);
        }
        $area->delete();
        return response()->json(['message' => 'Área eliminada exitosamente']);
    }
}

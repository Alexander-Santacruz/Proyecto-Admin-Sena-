<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TrainingCenter;

class TrainingCenterController extends Controller
{
    public function index()
    {
        return response()->json(TrainingCenter::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'city' => 'required|string|max:255'
        ]);

        $center = TrainingCenter::create($request->all());
        return response()->json([
            'message' => 'Centro de formación creado exitosamente',
            'data' => $center
        ], 201);
    }

    public function update(Request $request, string $id)
    {
        $center = TrainingCenter::find($id);
        if (!$center) {
            return response()->json(['message' => 'Centro no encontrado'], 404);
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'city' => 'required|string|max:255'
        ]);

        $center->update($request->all());
        return response()->json([
            'message' => 'Centro actualizado exitosamente',
            'data' => $center
        ]);
    }
}

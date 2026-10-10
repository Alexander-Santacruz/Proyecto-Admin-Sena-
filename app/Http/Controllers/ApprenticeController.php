<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Apprentice;

class ApprenticeController extends Controller
{
    public function index(Request $request)
    {
        $apprentices = Apprentice::all();
        if ($request->wantsJson() || $request->is('api/*')) {
            return response()->json($apprentices);
        }
        return view('apprentices.index', compact('apprentices'));
    }

    public function create()
    {
        return view('apprentices.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:apprentices',
            'ficha' => 'required|string|max:50',
            'photo' => 'nullable|url'
        ]);

        $apprentice = Apprentice::create($request->all());

        if ($request->wantsJson() || $request->is('api/*')) {
            return response()->json([
                'message' => 'Aprendiz creado exitosamente',
                'data' => $apprentice
            ], 201);
        }

        return redirect()->route('apprentices.index')->with('success', 'Aprendiz creado exitosamente.');
    }

    public function show(string $id)
    {
        $apprentice = Apprentice::find($id);
        if (!$apprentice) {
            return redirect()->route('apprentices.index')->with('error', 'Aprendiz no encontrado');
        }
        return view('apprentices.show', compact('apprentice'));
    }

    public function edit(string $id)
    {
        $apprentice = Apprentice::find($id);
        if (!$apprentice) {
            return redirect()->route('apprentices.index')->with('error', 'Aprendiz no encontrado');
        }
        return view('apprentices.edit', compact('apprentice'));
    }

    public function update(Request $request, string $id)
    {
        $apprentice = Apprentice::find($id);
        if (!$apprentice) {
            if ($request->wantsJson() || $request->is('api/*')) {
                return response()->json(['message' => 'Aprendiz no encontrado'], 404);
            }
            return redirect()->route('apprentices.index')->with('error', 'Aprendiz no encontrado');
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:apprentices,email,' . $id,
            'ficha' => 'required|string|max:50',
            'photo' => 'nullable|url'
        ]);

        $apprentice->update($request->all());

        if ($request->wantsJson() || $request->is('api/*')) {
            return response()->json([
                'message' => 'Aprendiz actualizado exitosamente',
                'data' => $apprentice
            ]);
        }

        return redirect()->route('apprentices.index')->with('success', 'Aprendiz actualizado exitosamente.');
    }

    public function destroy(Request $request, string $id)
    {
        $apprentice = Apprentice::find($id);
        if (!$apprentice) {
            if ($request->wantsJson() || $request->is('api/*')) {
                return response()->json(['message' => 'Aprendiz no encontrado'], 404);
            }
            return redirect()->route('apprentices.index')->with('error', 'Aprendiz no encontrado');
        }
        
        $apprentice->delete();

        if ($request->wantsJson() || $request->is('api/*')) {
            return response()->json(['message' => 'Aprendiz eliminado exitosamente']);
        }

        return redirect()->route('apprentices.index')->with('success', 'Aprendiz eliminado exitosamente.');
    }
}

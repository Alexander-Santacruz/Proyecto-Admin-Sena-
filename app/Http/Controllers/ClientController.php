<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller
{
    public function index()
    {
        return response()->json(Client::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:clients',
            'ficha' => 'required|string|max:50'
        ]);

        $client = Client::create($request->all());
        return response()->json([
            'message' => 'Cliente registrado exitosamente',
            'data' => $client
        ], 201);
    }

    public function update(Request $request, string $id)
    {
        $client = Client::find($id);
        if (!$client) {
            return response()->json(['message' => 'Cliente no encontrado'], 404);
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:clients,email,' . $id,
            'ficha' => 'required|string|max:50'
        ]);

        $client->update($request->all());
        return response()->json([
            'message' => 'Cliente actualizado exitosamente',
            'data' => $client
        ]);
    }

    public function destroy(string $id)
    {
        $client = Client::find($id);
        if (!$client) {
            return response()->json(['message' => 'Cliente no encontrado'], 404);
        }
        $client->delete();
        return response()->json(['message' => 'Cliente eliminado exitosamente']);
    }
}

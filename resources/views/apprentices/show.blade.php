@extends('layouts.app')

@section('title', 'Detalles de Aprendiz - AdminSena')

@section('content')
<div class="card" style="max-width: 600px; margin: 0 auto; text-align: center;">
    <h2 style="color: #39A900; margin-top: 0; border-bottom: 2px solid #39A900; padding-bottom: 10px;">🔍 Detalle del Aprendiz</h2>

    <div style="margin: 20px 0;">
        <img src="{{ $apprentice->photo ?? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80' }}" alt="Foto" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 4px solid #39A900; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    </div>

    <div style="text-align: left; background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; flex-direction: column; gap: 10px;">
        <div><strong>ID:</strong> {{ $apprentice->id }}</div>
        <div><strong>Nombre Completo:</strong> {{ $apprentice->name }}</div>
        <div><strong>Correo Electrónico:</strong> {{ $apprentice->email }}</div>
        <div><strong>Número de Ficha:</strong> <span style="background: #e6f4ea; color: #137333; padding: 2px 8px; border-radius: 8px; font-weight: bold;">{{ $apprentice->ficha }}</span></div>
        <div><strong>Registrado:</strong> {{ $apprentice->created_at }}</div>
    </div>

    <div style="display: flex; gap: 10px; margin-top: 25px;">
        <a href="{{ route('apprentices.edit', $apprentice->id) }}" class="btn-sena" style="flex: 1; text-align: center; background: #f59e0b; text-decoration: none;">Editar</a>
        <a href="{{ route('apprentices.index') }}" class="btn-sena" style="flex: 1; text-align: center; background: #64748b; text-decoration: none;">Volver al Listado</a>
    </div>
</div>
@endsection

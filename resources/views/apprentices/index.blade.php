@extends('layouts.app')

@section('title', 'Lista de Aprendices - AdminSena')

@section('content')
<div class="card">
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #39A900; padding-bottom: 10px; margin-bottom: 25px;">
        <h2 style="color: #39A900; margin: 0;">👥 Gestión de Aprendices (Blade)</h2>
        <a href="{{ route('apprentices.create') }}" class="btn-sena">+ Registrar Nuevo Aprendiz</a>
    </div>

    @if(session('success'))
        <div style="background: #e6f4ea; color: #137333; padding: 12px; border-radius: 6px; margin-bottom: 20px; font-weight: bold;">
            {{ session('success') }}
        </div>
    @endif

    <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; background: #fff; borderRadius: 8px; overflow: hidden;">
            <thead>
                <tr style="background: #39A900; color: white; text-align: left;">
                    <th style="padding: 12px;">Foto</th>
                    <th style="padding: 12px;">Nombre</th>
                    <th style="padding: 12px;">Correo</th>
                    <th style="padding: 12px;">Ficha</th>
                    <th style="padding: 12px; text-align: center;">Acciones</th>
                </tr>
            </thead>
            <tbody>
                @forelse($apprentices ?? [] as $apprentice)
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td style="padding: 12px;">
                            <img src="{{ $apprentice->photo ?? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' }}" alt="Foto" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;">
                        </td>
                        <td style="padding: 12px; font-weight: bold;">{{ $apprentice->name }}</td>
                        <td style="padding: 12px; color: #64748b;">{{ $apprentice->email }}</td>
                        <td style="padding: 12px;">
                            <span style="background: #e6f4ea; color: #137333; padding: 3px 8px; border-radius: 10px; font-size: 12px; font-weight: bold;">
                                {{ $apprentice->ficha }}
                            </span>
                        </td>
                        <td style="padding: 12px; text-align: center;">
                            <div style="display: flex; justify-content: center; gap: 8px;">
                                <a href="{{ route('apprentices.show', $apprentice->id) }}" style="padding: 5px 10px; background: #0284c7; color: white; border-radius: 4px; text-decoration: none; font-size: 13px; font-weight: bold;">Ver</a>
                                <a href="{{ route('apprentices.edit', $apprentice->id) }}" style="padding: 5px 10px; background: #f59e0b; color: white; border-radius: 4px; text-decoration: none; font-size: 13px; font-weight: bold;">Editar</a>
                                <form action="{{ route('apprentices.destroy', $apprentice->id) }}" method="POST" onsubmit="return confirm('¿Estás seguro de eliminar este aprendiz?');" style="margin: 0;">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" style="padding: 5px 10px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 13px; font-weight: bold;">Eliminar</button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="5" style="padding: 30px; text-align: center; color: #64748b;">No hay aprendices registrados en Blade. (También puedes usar la SPA React en /dashboard).</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>
@endsection

@extends('layouts.app')

@section('title', 'Registrar Aprendiz - AdminSena')

@section('content')
<div class="card" style="max-width: 600px; margin: 0 auto;">
    <h2 style="color: #39A900; margin-top: 0; border-bottom: 2px solid #39A900; padding-bottom: 10px;">📝 Registrar Nuevo Aprendiz</h2>

    @if ($errors->any())
        <div style="background: #fee2e2; color: #991b1b; padding: 12px; border-radius: 6px; margin-bottom: 20px;">
            <ul style="margin: 0; padding-left: 20px;">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ route('apprentices.store') }}" method="POST" style="display: flex; flexDirection: column; gap: 15px;">
        @csrf
        <div style="display: flex; flexDirection: column; gap: 5px;">
            <label style="font-weight: bold; color: #334155;">Nombre Completo:</label>
            <input type="text" name="name" value="{{ old('name') }}" required style="padding: 10px; border: 1px solid #cbd5e1; border-radius: 4px;">
        </div>

        <div style="display: flex; flexDirection: column; gap: 5px;">
            <label style="font-weight: bold; color: #334155;">Correo Electrónico:</label>
            <input type="email" name="email" value="{{ old('email') }}" required style="padding: 10px; border: 1px solid #cbd5e1; border-radius: 4px;">
        </div>

        <div style="display: flex; flexDirection: column; gap: 5px;">
            <label style="font-weight: bold; color: #334155;">Número de Ficha:</label>
            <input type="text" name="ficha" value="{{ old('ficha') }}" required style="padding: 10px; border: 1px solid #cbd5e1; border-radius: 4px;">
        </div>

        <div style="display: flex; flexDirection: column; gap: 5px;">
            <label style="font-weight: bold; color: #334155;">URL de Foto:</label>
            <input type="url" name="photo" value="{{ old('photo') }}" placeholder="https://..." style="padding: 10px; border: 1px solid #cbd5e1; border-radius: 4px;">
        </div>

        <div style="display: flex; gap: 10px; margin-top: 10px;">
            <button type="submit" class="btn-sena" style="flex: 1; text-align: center;">Guardar Aprendiz</button>
            <a href="{{ route('apprentices.index') }}" style="flex: 1; padding: 10px; background: #64748b; color: white; border-radius: 6px; text-decoration: none; text-align: center; font-weight: bold;">Cancelar</a>
        </div>
    </form>
</div>
@endsection

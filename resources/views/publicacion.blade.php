@extends('layouts.app')

@section('title', 'Publicaciones Institucionales - AdminSena')

@section('content')
<div class="card">
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #39A900; padding-bottom: 10px; margin-bottom: 25px;">
        <h2 style="color: #39A900; margin: 0;">📰 Anuncios y Publicaciones Oficiales</h2>
        <span style="background: #e6f4ea; color: #137333; padding: 6px 12px; border-radius: 20px; font-weight: bold; font-size: 0.9rem;">SENA Actualizado</span>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px;">
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; display: flex; flexDirection: column;">
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80" alt="Oferta" style="width: 100%; height: 180px; object-fit: cover;">
            <div style="padding: 20px;">
                <span style="font-size: 11px; background: #e0f2fe; color: #0369a1; padding: 3px 8px; borderRadius: 10px; font-weight: bold;">Convocatoria</span>
                <h3 style="margin: 10px 0 8px 0; color: #1e293b;">III Oferta Nacional de Programas de Formación</h3>
                <p style="color: #64748b; font-size: 14px; margin-bottom: 15px;">Inscríbete en los programas técnicos y tecnológicos disponibles para este trimestre en todas las regionales del país.</p>
                <button class="btn-sena" style="width: 100%; padding: 8px;">Leer Convocatoria</button>
            </div>
        </div>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; display: flex; flexDirection: column;">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80" alt="Tecnología" style="width: 100%; height: 180px; object-fit: cover;">
            <div style="padding: 20px;">
                <span style="font-size: 11px; background: #e6f4ea; color: #137333; padding: 3px 8px; borderRadius: 10px; font-weight: bold;">Tecnología</span>
                <h3 style="margin: 10px 0 8px 0; color: #1e293b;">Modernización de Ambientes de Cómputo</h3>
                <p style="color: #64748b; font-size: 14px; margin-bottom: 15px;">Se han entregado más de 500 nuevos equipos portátiles de alta gama para las áreas de programación y diseño.</p>
                <button class="btn-sena" style="width: 100%; padding: 8px;">Ver Detalles</button>
            </div>
        </div>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; display: flex; flexDirection: column;">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" alt="Bienestar" style="width: 100%; height: 180px; object-fit: cover;">
            <div style="padding: 20px;">
                <span style="font-size: 11px; background: #fef3c7; color: #d97706; padding: 3px 8px; borderRadius: 10px; font-weight: bold;">Bienestar</span>
                <h3 style="margin: 10px 0 8px 0; color: #1e293b;">Jornada de Salud y Apoyo al Aprendiz</h3>
                <p style="color: #64748b; font-size: 14px; margin-bottom: 15px;">Participa en las actividades de bienestar al aprendiz programadas para la próxima semana en el auditorio principal.</p>
                <button class="btn-sena" style="width: 100%; padding: 8px;">Más Información</button>
            </div>
        </div>
    </div>
</div>
@endsection

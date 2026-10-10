@extends('layouts.app')

@section('title', 'Inicio - AdminSena')

@section('content')
<div class="card" style="text-align: center; padding: 50px 20px;">
    <h2 style="color: #39A900; font-size: 2.5rem; margin-top: 0;">Bienvenido a AdminSena</h2>
    <p style="font-size: 1.2rem; color: #475569; max-width: 700px; margin: 0 auto 30px auto;">
        Sistema integrado de gestión académica, instructores, aprendices, áreas de formación y equipos de cómputo del SENA.
    </p>
    <div style="display: flex; justify-content: center; gap: 20px;">
        <a href="/dashboard" class="btn-sena">Ir al Dashboard SPA (React)</a>
        <a href="/publicaciones" class="btn-sena" style="background-color: #1565c0;">Ver Publicaciones y Noticias</a>
    </div>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 30px;">
    <div class="card">
        <h3 style="color: #39A900; margin-top: 0;">Gestión de Aprendices & Clientes</h3>
        <p>Administra registros, fichas, correos electrónicos y fotografías de los aprendices e invitados del SENA.</p>
        <a href="/dashboard" style="color: #39A900; font-weight: bold; text-decoration: none;">Acceder &rarr;</a>
    </div>
    <div class="card">
        <h3 style="color: #39A900; margin-top: 0;">Publicaciones Institucionales</h3>
        <p>Consulta los últimos anuncios, comunicados oficiales y novedades publicadas para la comunidad.</p>
        <a href="/publicaciones" style="color: #39A900; font-weight: bold; text-decoration: none;">Ver publicaciones &rarr;</a>
    </div>
    <div class="card">
        <h3 style="color: #39A900; margin-top: 0;">Infraestructura y Equipos</h3>
        <p>Control de centros de formación, áreas especializadas y disponibilidad de equipos de cómputo.</p>
        <a href="/dashboard" style="color: #39A900; font-weight: bold; text-decoration: none;">Administrar &rarr;</a>
    </div>
</div>
@endsection

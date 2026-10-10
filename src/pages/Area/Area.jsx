import React, { useState, useEffect } from 'react';
import './Area.css';

export default function Area() {
  const [areas, setAreas] = useState([]);
  const [form, setForm] = useState({ name: '', description: '' });
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [jsonResponse, setJsonResponse] = useState(null);

  const fetchAreas = async () => {
    try {
      const res = await fetch('/api/areas');
      const data = await res.json();
      setAreas(data);
    } catch (error) {
      console.error('Error al cargar áreas:', error);
    }
  };

  useEffect(() => {
    fetchAreas();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingId ? `/api/areas/${editingId}` : '/api/areas';
      const method = editingId ? 'PUT' : 'POST';
      
      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setJsonResponse(data);
        setForm({ name: '', description: '' });
        setShowForm(false);
        setEditingId(null);
        fetchAreas();
      } else {
        setJsonResponse({ error: 'Error al procesar área', details: data });
      }
    } catch (error) {
      console.error('Error:', error);
      setJsonResponse({ error: 'Error de conexión' });
    }
  };

  const handleEdit = (area) => {
    setForm({ name: area.name, description: area.description || '' });
    setEditingId(area.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar esta área?')) return;
    try {
      const res = await fetch(`/api/areas/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchAreas();
      } else {
        alert('Error al eliminar');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className="area-container" style={{ padding: '30px', maxWidth: '900px', margin: '0 auto', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '2px solid #39A900', paddingBottom: '10px' }}>
        <h2 style={{ color: '#39A900', margin: 0 }}>Gestión de Áreas SENA</h2>
        <button 
          onClick={() => { setShowForm(!showForm); setEditingId(null); setForm({ name: '', description: '' }); }} 
          style={{ padding: '10px 20px', background: '#39A900', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {showForm ? 'Cancelar' : '+ Añadir Nueva Área'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="area-form" style={{ display: 'flex', flexDirection: 'column', gap: '15px', background: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '30px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#1e293b' }}>{editingId ? 'Editar Área' : 'Registrar Nueva Área'}</h3>
          <input 
            type="text" 
            placeholder="Nombre del área (ej. Tecnologías de la Información)" 
            value={form.name} 
            onChange={(e) => setForm({ ...form, name: e.target.value })} 
            required 
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
          <textarea 
            placeholder="Descripción detallada del área de formación..." 
            value={form.description} 
            onChange={(e) => setForm({ ...form, description: e.target.value })} 
            rows="3"
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
          <button type="submit" style={{ padding: '10px', background: editingId ? '#f59e0b' : '#1565c0', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            {editingId ? 'Actualizar Área' : 'Guardar Área'}
          </button>
        </form>
      )}

      {jsonResponse && (
        <div style={{ background: '#1e293b', color: '#38bdf8', padding: '15px', borderRadius: '8px', marginBottom: '25px', fontFamily: 'monospace' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: '#94a3b8' }}>
            <span>📄 Respuesta JSON del Servidor (API):</span>
            <button onClick={() => setJsonResponse(null)} style={{ background: 'transparent', border: 'none', color: '#f87171', cursor: 'pointer' }}>✖ Cerrar</button>
          </div>
          <pre style={{ margin: 0, overflowX: 'auto' }}>{JSON.stringify(jsonResponse, null, 2)}</pre>
        </div>
      )}

      <div className="area-list">
        <h3 style={{ color: '#1e293b' }}>Áreas Registradas en el Sistema</h3>
        {areas.length === 0 ? (
          <p style={{ color: '#64748b' }}>No hay áreas registradas actualmente. ¡Haz clic en "+ Añadir Nueva Área" para registrar una!</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px', marginTop: '15px' }}>
            {areas.map((area) => (
              <div key={area.id} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ margin: '0 0 8px 0', color: '#2d3748' }}>{area.name}</h4>
                  <p style={{ margin: '0 0 15px 0', color: '#718096', fontSize: '14px' }}>{area.description || 'Sin descripción'}</p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button onClick={() => handleEdit(area)} style={{ flex: 1, padding: '6px', background: '#ffc107', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', color: '#212529' }}>Editar</button>
                  <button onClick={() => handleDelete(area.id)} style={{ flex: 1, padding: '6px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Eliminar</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

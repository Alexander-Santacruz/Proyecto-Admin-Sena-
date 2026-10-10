import React, { useState, useEffect } from 'react';

export const TrainingCenter = () => {
  const [centers, setCenters] = useState([]);
  const [form, setForm] = useState({ name: '', city: '' });
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [jsonResponse, setJsonResponse] = useState(null);

  const fetchCenters = async () => {
    try {
      const res = await fetch('/api/training-centers');
      const data = await res.json();
      setCenters(data);
    } catch (error) {
      console.error('Error al cargar centros:', error);
    }
  };

  useEffect(() => {
    fetchCenters();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingId ? `/api/training-centers/${editingId}` : '/api/training-centers';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setJsonResponse(data);
        setForm({ name: '', city: '' });
        setShowForm(false);
        setEditingId(null);
        fetchCenters();
      } else {
        setJsonResponse({ error: 'Error al procesar centro', details: data });
      }
    } catch (error) {
      console.error('Error:', error);
      setJsonResponse({ error: 'Error de conexión' });
    }
  };

  const handleEdit = (center) => {
    setForm({ name: center.name, city: center.city });
    setEditingId(center.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este centro?')) return;
    try {
      const res = await fetch(`/api/training-centers/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchCenters();
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '900px', margin: '0 auto', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '2px solid #39A900', paddingBottom: '10px' }}>
        <h2 style={{ color: '#39A900', margin: 0 }}>Centros de Formación SENA</h2>
        <button 
          onClick={() => { setShowForm(!showForm); setEditingId(null); setForm({ name: '', city: '' }); }} 
          style={{ padding: '10px 20px', background: '#39A900', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {showForm ? 'Cancelar' : '+ Añadir Nuevo Centro'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', background: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '30px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#1e293b' }}>{editingId ? 'Editar Centro de Formación' : 'Registrar Nuevo Centro de Formación'}</h3>
          <input 
            type="text" 
            placeholder="Nombre del centro" 
            value={form.name} 
            onChange={(e) => setForm({ ...form, name: e.target.value })} 
            required 
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
          <input 
            type="text" 
            placeholder="Ciudad" 
            value={form.city} 
            onChange={(e) => setForm({ ...form, city: e.target.value })} 
            required 
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
          <button type="submit" style={{ padding: '10px', background: editingId ? '#f59e0b' : '#1565c0', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            {editingId ? 'Actualizar Centro' : 'Guardar Centro'}
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

      <div>
        <h3 style={{ color: '#1e293b' }}>Centros Registrados</h3>
        {centers.length === 0 ? (
          <p style={{ color: '#64748b' }}>No hay centros registrados actualmente.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px', marginTop: '15px' }}>
            {centers.map((item) => (
              <div key={item.id} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '12px', background: '#e6f4ea', color: '#137333', padding: '2px 8px', borderRadius: '10px', fontWeight: 'bold' }}>📍 {item.city}</span>
                  <h4 style={{ margin: '10px 0 15px 0', color: '#2d3748' }}>{item.name}</h4>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button onClick={() => handleEdit(item)} style={{ flex: 1, padding: '6px', background: '#ffc107', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', color: '#212529' }}>Editar</button>
                  <button onClick={() => handleDelete(item.id)} style={{ flex: 1, padding: '6px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Eliminar</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

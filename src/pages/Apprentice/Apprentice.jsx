import React, { useState, useEffect } from 'react';

export const Apprentice = () => {
  const [apprentices, setApprentices] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', ficha: '', photo: '' });
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [jsonResponse, setJsonResponse] = useState(null);

  const fetchApprentices = async () => {
    try {
      const res = await fetch('/api/apprentices');
      const data = await res.json();
      setApprentices(data);
    } catch (error) {
      console.error('Error al cargar aprendices:', error);
    }
  };

  useEffect(() => {
    fetchApprentices();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingId ? `/api/apprentices/${editingId}` : '/api/apprentices';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setJsonResponse(data);
        setForm({ name: '', email: '', ficha: '', photo: '' });
        setShowForm(false);
        setEditingId(null);
        fetchApprentices();
      } else {
        setJsonResponse({ error: 'Error al procesar aprendiz', details: data });
      }
    } catch (error) {
      console.error('Error:', error);
      setJsonResponse({ error: 'Error de conexión' });
    }
  };

  const handleEdit = (apprentice) => {
    setForm({ name: apprentice.name, email: apprentice.email, ficha: apprentice.ficha, photo: apprentice.photo || '' });
    setEditingId(apprentice.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este aprendiz?')) return;
    try {
      const res = await fetch(`/api/apprentices/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchApprentices();
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '2px solid #39A900', paddingBottom: '10px' }}>
        <h2 style={{ color: '#39A900', margin: 0 }}>Gestión de Aprendices SENA</h2>
        <button 
          onClick={() => { setShowForm(!showForm); setEditingId(null); setForm({ name: '', email: '', ficha: '', photo: '' }); }} 
          style={{ padding: '10px 20px', background: '#39A900', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {showForm ? 'Cancelar' : '+ Añadir Nuevo Aprendiz'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', background: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '30px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#1e293b' }}>{editingId ? 'Editar Aprendiz' : 'Registrar Nuevo Aprendiz'}</h3>
          <input 
            type="text" 
            placeholder="Nombre completo" 
            value={form.name} 
            onChange={(e) => setForm({ ...form, name: e.target.value })} 
            required 
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
          <input 
            type="email" 
            placeholder="Correo electrónico" 
            value={form.email} 
            onChange={(e) => setForm({ ...form, email: e.target.value })} 
            required 
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
          <input 
            type="text" 
            placeholder="Número de Ficha" 
            value={form.ficha} 
            onChange={(e) => setForm({ ...form, ficha: e.target.value })} 
            required 
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
          <input 
            type="url" 
            placeholder="URL de la Foto del Aprendiz (ej. https://images.unsplash.com/...)" 
            value={form.photo} 
            onChange={(e) => setForm({ ...form, photo: e.target.value })} 
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
          <button type="submit" style={{ padding: '10px', background: editingId ? '#f59e0b' : '#1565c0', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            {editingId ? 'Actualizar Aprendiz' : 'Guardar Aprendiz'}
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
        <h3 style={{ color: '#1e293b' }}>Listado de Aprendices Registrados</h3>
        {apprentices.length === 0 ? (
          <p style={{ color: '#64748b' }}>No hay aprendices registrados actualmente.</p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <thead>
                <tr style={{ background: '#39A900', color: 'white', textAlign: 'left' }}>
                  <th style={{ padding: '12px' }}>Foto</th>
                  <th style={{ padding: '12px' }}>Nombre</th>
                  <th style={{ padding: '12px' }}>Correo</th>
                  <th style={{ padding: '12px' }}>Ficha</th>
                  <th style={{ padding: '12px', textAlign: 'center' }}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {apprentices.map((item, index) => (
                  <tr key={item.id} style={{ borderBottom: '1px solid #e2e8f0', background: index % 2 === 0 ? '#fff' : '#f8fafc' }}>
                    <td style={{ padding: '12px' }}>
                      <img 
                        src={item.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'} 
                        alt={item.name} 
                        style={{ width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #39A900' }}
                      />
                    </td>
                    <td style={{ padding: '12px', fontWeight: 'bold', color: '#1e293b' }}>{item.name}</td>
                    <td style={{ padding: '12px', color: '#64748b' }}>{item.email}</td>
                    <td style={{ padding: '12px' }}>
                      <span style={{ fontSize: '12px', background: '#e6f4ea', color: '#137333', padding: '4px 10px', borderRadius: '12px', fontWeight: 'bold' }}>
                        Ficha: {item.ficha}
                      </span>
                    </td>
                    <td style={{ padding: '12px', textAlign: 'center' }}>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                        <button onClick={() => handleEdit(item)} style={{ padding: '6px 12px', background: '#f59e0b', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Editar</button>
                        <button onClick={() => handleDelete(item.id)} style={{ padding: '6px 12px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Eliminar</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

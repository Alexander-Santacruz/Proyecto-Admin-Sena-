import React, { useState, useEffect } from 'react';

export const Computer = () => {
  const [computers, setComputers] = useState([]);
  const [form, setForm] = useState({ serial: '', brand: '', status: '' });
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [jsonResponse, setJsonResponse] = useState(null);

  const fetchComputers = async () => {
    try {
      const res = await fetch('/api/computers');
      const data = await res.json();
      setComputers(data);
    } catch (error) {
      console.error('Error al cargar computadores:', error);
    }
  };

  useEffect(() => {
    fetchComputers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingId ? `/api/computers/${editingId}` : '/api/computers';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setJsonResponse(data);
        setForm({ serial: '', brand: '', status: '' });
        setShowForm(false);
        setEditingId(null);
        fetchComputers();
      } else {
        setJsonResponse({ error: 'Error al procesar computador', details: data });
      }
    } catch (error) {
      console.error('Error:', error);
      setJsonResponse({ error: 'Error de conexión' });
    }
  };

  const handleEdit = (computer) => {
    setForm({ serial: computer.serial, brand: computer.brand, status: computer.status });
    setEditingId(computer.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este equipo?')) return;
    try {
      const res = await fetch(`/api/computers/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchComputers();
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '900px', margin: '0 auto', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '2px solid #39A900', paddingBottom: '10px' }}>
        <h2 style={{ color: '#39A900', margin: 0 }}>Gestión de Equipos de Cómputo SENA</h2>
        <button 
          onClick={() => { setShowForm(!showForm); setEditingId(null); setForm({ serial: '', brand: '', status: '' }); }} 
          style={{ padding: '10px 20px', background: '#39A900', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {showForm ? 'Cancelar' : '+ Añadir Nuevo Equipo'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', background: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '30px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#1e293b' }}>{editingId ? 'Editar Computador' : 'Registrar Nuevo Computador'}</h3>
          <input 
            type="text" 
            placeholder="Número de Serial" 
            value={form.serial} 
            onChange={(e) => setForm({ ...form, serial: e.target.value })} 
            required 
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
          <input 
            type="text" 
            placeholder="Marca (ej. HP, Lenovo, Dell)" 
            value={form.brand} 
            onChange={(e) => setForm({ ...form, brand: e.target.value })} 
            required 
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
          <input 
            type="text" 
            placeholder="Estado (ej. Disponible, En Mantenimiento)" 
            value={form.status} 
            onChange={(e) => setForm({ ...form, status: e.target.value })} 
            required 
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
          <button type="submit" style={{ padding: '10px', background: editingId ? '#f59e0b' : '#1565c0', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            {editingId ? 'Actualizar Equipo' : 'Guardar Equipo'}
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
        <h3 style={{ color: '#1e293b' }}>Equipos Registrados</h3>
        {computers.length === 0 ? (
          <p style={{ color: '#64748b' }}>No hay equipos registrados actualmente.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px', marginTop: '15px' }}>
            {computers.map((item) => (
              <div key={item.id} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '12px', background: '#e6f4ea', color: '#137333', padding: '2px 8px', borderRadius: '10px', fontWeight: 'bold' }}>{item.status}</span>
                  <h4 style={{ margin: '10px 0 5px 0', color: '#2d3748' }}>{item.brand}</h4>
                  <p style={{ margin: 0, color: '#718096', fontSize: '14px' }}>💻 Serial: {item.serial}</p>
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
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

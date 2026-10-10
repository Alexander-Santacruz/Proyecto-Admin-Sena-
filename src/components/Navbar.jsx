import React, { useState, useEffect } from 'react';
import "./Navbar.css"

export const Navbar = () => {
  const [userSession, setUserSession] = useState(null);
  const [adminMenuOpen, setAdminMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem('user_session'));
    if (session) {
      setUserSession(session);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user_session');
    localStorage.removeItem('user_role');
    setUserSession(null);
    window.location.href = '/';
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/apprentice?search=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <nav className="custom-navbar">
      <div className="nav-container">
        {/* Brand / Logo */}
        <a href="/" className="nav-brand">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/84/Logo_SENA_svg.svg"
            alt="logo_sena"
          />
          <span>Admin Sena</span>
        </a>

        {/* Botón menú móvil */}
        <button
          className="nav-toggle"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label="Abrir Menú"
        >
          ☰
        </button>

        {/* Links de navegación */}
        <div className={`nav-menu ${mobileNavOpen ? 'open' : ''}`}>
          <a href="/about" className="nav-link">
            ¿Quiénes Somos?
          </a>

          {/* Menú de Administración (Solo si hay sesión activa) */}
          {userSession && (
            <div className="dropdown-wrapper">
              <button
                className="dropdown-trigger"
                onClick={() => setAdminMenuOpen(!adminMenuOpen)}
              >
                Administración ▾
              </button>
              {adminMenuOpen && (
                <ul className="dropdown-menu-custom">
                  <li><a href="/area/create" className="dropdown-item-custom">Área</a></li>
                  <li><a href="/trainingcenter/create" className="dropdown-item-custom">Centro</a></li>
                  <li><a href="/computer/create" className="dropdown-item-custom">Equipo</a></li>
                  <li><a href="/course/create" className="dropdown-item-custom">Curso</a></li>
                  <li><a href="/teacher/create" className="dropdown-item-custom">Instructor</a></li>
                  <li><a href="/client" className="dropdown-item-custom">Clientes (CRUD)</a></li>
                  <li><a href="/apprentice/create" className="dropdown-item-custom">Aprendiz</a></li>
                </ul>
              )}
            </div>
          )}

          {/* Buscador */}
          <form onSubmit={handleSearchSubmit} className="nav-search">
            <input
              type="search"
              placeholder="Buscar registros"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">🔍</button>
          </form>

          {/* Control de autenticación */}
          {userSession ? (
            <div className="dropdown-wrapper">
              <button
                className="user-avatar-btn"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <img
                  src={userSession.avatar || 'https://via.placeholder.com/38'}
                  alt={userSession.name}
                  className="user-avatar-img"
                />
                <span>{userSession.name}</span>
              </button>

              {userMenuOpen && (
                <ul className="dropdown-menu-custom">
                  <li style={{ padding: '0.6rem 1.2rem', borderBottom: '1px solid #e2e8f0' }}>
                    <strong>{userSession.name}</strong>
                    <br />
                    <small style={{ color: '#64748b' }}>{userSession.email}</small>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="dropdown-item-custom"
                      style={{ color: '#dc2626', fontWeight: 'bold', width: '100%', textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer' }}
                    >
                      🚪 Cerrar Sesión
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <a
              href="/login"
              style={{
                backgroundColor: '#ffffff',
                color: '#39A900',
                padding: '0.4rem 1rem',
                borderRadius: '6px',
                fontWeight: 'bold',
                textDecoration: 'none',
              }}
            >
              Iniciar Sesión
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};
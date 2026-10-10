import React from 'react';
import "./Footer.css"

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-custom">
      <div className="container-custom">
        <div className="footer-grid">
          <div>
            <h3 style={{ margin: '0 0 0.25rem 0', color: '#ffffff' }}>David Alexander Chango Santacruz</h3>
            <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.9rem' }}>Ficha: 3223899</p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <h3 style={{ margin: '0 0 0.25rem 0', color: '#39A900' }}>Admin SENA</h3>
            <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.9rem' }}>
              Panel de Administración Académica
            </p>
          </div>
        </div>

        <div className="footer-sub">
          <div>&copy; {currentYear} Todos los derechos reservados.</div>
          <div>Desarrollado para la evaluación del instructor</div>
        </div>
      </div>
    </footer>
  );
};

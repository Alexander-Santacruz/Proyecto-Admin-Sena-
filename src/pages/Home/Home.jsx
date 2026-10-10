import "./Home.css"
import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: 'Admin SENA',
    subtitle: 'Bienvenido al Panel de Administración y Gestión de Procesos Académicos.',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    btnText: 'Comenzar Registro',
    btnLink: '/login',
    btnClass: 'btn-light'
  },
  {
    id: 2,
    title: 'Conoce Ofertas Educativas',
    subtitle: 'Explora las diversas ofertas educativas que tiene Sena disponibles.',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    btnText: 'Ver Ofertas',
    btnLink: '/ofertas',
    btnClass: 'btn-green'
  },
  {
    id: 3,
    title: 'Seguimiento de Eventos',
    subtitle: 'Consulta los nuevos eventos que se encuentran disponibles.',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    btnText: 'Descubre más',
    btnLink: '/eventos',
    btnClass: 'btn-outline'
  },
  {
    id: 4,
    title: 'Seguimiento de Anuncios',
    subtitle: 'Consulta en tiempo real anuncios sobre la institución.',
    img: 'https://www.las2orillas.co/wp-content/uploads/2023/08/Servicio-Nacional-de-Aprendizaje-SENA.jpg',
    btnText: 'Saber más',
    btnLink: '/anuncios',
    btnClass: 'btn-outline'
  }
];

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [userSession, setUserSession] = useState(null);

  useEffect(() => {
    const session = localStorage.getItem('user_session');
    if (session) setUserSession(JSON.parse(session));

    // Timer Carousel
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    // Scroll listener
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container-custom" style={{ paddingUp: '1.5rem' }}>
      {/* CAROUSEL HERO */}
      <div className="carousel-custom">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="carousel-overlay" />
            <img src={slide.img} alt={slide.title} className="carousel-img" />
            <div className="carousel-caption-custom">
              <h1 style={{ color: index === 0 ? '#39A900' : '#ffffff' }}>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <a
                href={slide.btnLink}
                style={{
                  display: 'inline-block',
                  padding: '0.6rem 1.5rem',
                  backgroundColor: slide.btnClass === 'btn-green' ? '#39A900' : '#ffffff',
                  color: slide.btnClass === 'btn-green' ? '#ffffff' : '#1e293b',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
              >
                {slide.btnText}
              </a>
            </div>
          </div>
        ))}

        <button
          className="carousel-nav-btn carousel-prev"
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        >
          ❮
        </button>
        <button
          className="carousel-nav-btn carousel-next"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        >
          ❯
        </button>
      </div>

      {/* NOVEDADES Y ALERTA */}
      <div style={{ marginBottom: '1rem' }}>
        <span className="badge-custom badge-green">📢 Novedades del Centro</span>
        <h2 style={{ fontSize: '1.75rem', margin: '0.5rem 0' }}>Anuncios, Ofertas y Eventos</h2>
      </div>

      <div className="alert-banner">
        <div style={{ fontSize: '1.5rem' }}>⚠️</div>
        <div>
          <span className="badge-custom badge-green">¡Importante!</span>
          <h4 style={{ margin: '0.25rem 0 0.5rem 0' }}>Convocatoria de Formación Titulada Presencial 2026</h4>
          <p style={{ margin: 0, color: '#475569', fontSize: '0.9rem' }}>
            Las inscripciones para la oferta de cursos técnicos y tecnólogos cierran este viernes. Asegúrate de verificar los cupos disponibles.
          </p>
        </div>
      </div>

      {/* GRID TARJETAS */}
      <div className="grid-cards">
        {/* Oferta */}
        <div className="card-custom">
          <div className="card-header-custom">
            <span className="badge-custom badge-green">📚 Oferta Educativa</span>
            <small style={{ color: '#64748b' }}>20 Ago 2026</small>
          </div>
          <div className="card-body-custom">
            <h3 style={{ margin: '0 0 0.5rem 0' }}>Nuevo Tecnólogo en Desarrollo de Software</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
              Abierta la preinscripción para la jornada nocturna. Aprende desarrollo web, bases de datos y desarrollo de APIs.
            </p>
          </div>
          <div className="card-footer-custom">
            <a href="/ofertas" style={{ color: '#39A900', fontWeight: 'bold', textDecoration: 'none' }}>
              Consultar ofertas →
            </a>
          </div>
        </div>

        {/* Evento */}
        <div className="card-custom">
          <div className="card-header-custom">
            <span className="badge-custom badge-blue">🏆 Evento</span>
            <small style={{ color: '#64748b' }}>28 Ago 2026</small>
          </div>
          <div className="card-body-custom">
            <h3 style={{ margin: '0 0 0.5rem 0' }}>Feria de Innovación y Tecnología SENA</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
              Exposición de proyectos formativos creados por aprendices con muestra de prototipos.
            </p>
          </div>
          <div className="card-footer-custom">
            <a href="/eventos" style={{ color: '#1565c0', fontWeight: 'bold', textDecoration: 'none' }}>
              Más Detalles →
            </a>
          </div>
        </div>

        {/* Anuncio */}
        <div className="card-custom">
          <div className="card-header-custom">
            <span className="badge-custom badge-info">📢 Anuncios</span>
            <small style={{ color: '#64748b' }}>02 Sep 2026</small>
          </div>
          <div className="card-body-custom">
            <h3 style={{ margin: '0 0 0.5rem 0' }}>Taller de Hoja de Vida y Entrevistas</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
              Aprende a redactar un perfil profesional atractivo para el inicio de tu etapa productiva.
            </p>
          </div>
          <div className="card-footer-custom">
            <a href="/anuncios" style={{ color: '#1e293b', fontWeight: 'bold', textDecoration: 'none' }}>
              Conoce más →
            </a>
          </div>
        </div>
      </div>

      {/* VISTA DINÁMICA: GUEST / ADMIN */}
      {!userSession ? (
        <div className="card-custom" style={{ padding: '1.5rem', backgroundColor: '#ffffff', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ margin: '0 0 0.25rem 0' }}>¿Eres Administrador o Instructor?</h3>
              <p style={{ margin: 0, color: '#64748b' }}>Inicia sesión para gestionar las listas de aprendices y fichas de formación.</p>
            </div>
            <a
              href="/login"
              style={{
                backgroundColor: '#39A900',
                color: '#ffffff',
                padding: '0.6rem 1.25rem',
                borderRadius: '6px',
                fontWeight: 'bold',
                textDecoration: 'none'
              }}
            >
              Iniciar Sesión
            </a>
          </div>
        </div>
      ) : (
        <div style={{ margin: '2rem 0' }}>
          <h2>Acceso directo</h2>
          <div className="quick-access-grid">
            <a href="/apprentice" className="quick-card">
              <span style={{ fontSize: '2rem' }}>👥</span>
              <strong>Aprendices</strong>
            </a>
            <a href="/course" className="quick-card">
              <span style={{ fontSize: '2rem' }}>📖</span>
              <strong>Cursos</strong>
            </a>
            <a href="/teacher" className="quick-card">
              <span style={{ fontSize: '2rem' }}>🪪</span>
              <strong>Instructores</strong>
            </a>
            <a href="/about" className="quick-card">
              <span style={{ fontSize: '2rem' }}>🏛️</span>
              <strong>Nosotros</strong>
            </a>
          </div>
        </div>
      )}

      {/* BOTÓN VOLVER ARRIBA */}
      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop} title="Volver al principio">
          ↑
        </button>
      )}
    </div>
  );
};
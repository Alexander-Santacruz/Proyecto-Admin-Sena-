import React from 'react';
import "./About.css"

export const About = () => {
  return (
    <div className="container-custom" style={{ padding: '2.5rem 1.5rem' }}>
      {/* Encabezado */}
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
        <span className="badge-custom badge-green">🏛️ Nuestra Institución</span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.75rem 0' }}>
          Servicio Nacional de Aprendizaje
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6 }}>
          Conoce el propósito y la proyección institucional del SENA en el desarrollo social, técnico y tecnológico de Colombia.
        </p>
      </div>

      {/* Misión y Visión */}
      <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
        {/* Misión */}
        <div className="card-custom" style={{ borderColor: '#39A900' }}>
          <div
            className="card-header-custom"
            style={{ backgroundColor: '#39A900', color: '#ffffff', padding: '1.25rem' }}
          >
            <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              🎯 Misión
            </h3>
          </div>
          <div className="card-body-custom" style={{ lineHeight: 1.7, color: '#475569' }}>
            <p>
              El SENA está encargado de cumplir la función que le corresponde al Estado de invertir en el desarrollo social y técnico de los trabajadores colombianos, ofreciendo y ejecutando la <strong>formación profesional integral</strong>, para la incorporación y el desarrollo de las personas en actividades productivas que contribuyan al desarrollo social, económico y tecnológico del país <em>(Ley 119/1994)</em>.
            </p>
          </div>
        </div>

        {/* Visión */}
        <div className="card-custom" style={{ borderColor: '#00324D' }}>
          <div
            className="card-header-custom"
            style={{ backgroundColor: '#00324D', color: '#ffffff', padding: '1.25rem' }}
          >
            <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              👁️ Visión
            </h3>
          </div>
          <div className="card-body-custom" style={{ lineHeight: 1.7, color: '#475569' }}>
            <p>
              Para el año 2026, el Servicio Nacional de Aprendizaje – SENA estará a la vanguardia de la cualificación del talento humano, tanto a nivel nacional como internacional. Esto se logrará a través de la formación profesional integral, el empleo, el emprendimiento y el reconocimiento de aprendizajes previos, generando valor público y fortaleciendo la economía campesina, popular, verde y digital.
            </p>
          </div>
        </div>
      </div>

      {/* Pilares Institucionales */}
      <div className="grid-cards" style={{ marginTop: '2rem' }}>
        <div className="card-custom" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📋</div>
          <h4 style={{ margin: '0 0 0.5rem 0' }}>Formación Integral</h4>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
            Educación teórica y práctica adaptada a las necesidades reales del sector productivo.
          </p>
        </div>

        <div className="card-custom" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💡</div>
          <h4 style={{ margin: '0 0 0.5rem 0' }}>Innovación y Tecnología</h4>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
            Uso de tecnologías de punta y actualización constante en áreas de conocimiento.
          </p>
        </div>

        <div className="card-custom" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>👥</div>
          <h4 style={{ margin: '0 0 0.5rem 0' }}>Inclusión Social</h4>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
            Oportunidades de formación para todos los ciudadanos en todo el territorio nacional.
          </p>
        </div>
      </div>
    </div>
  );
};
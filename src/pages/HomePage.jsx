import React from 'react';

function HomePage() {
  return (
    <div
      className='container-fluid d-flex flex-column align-items-center justify-content-center vh-100'
      style={{
        background: 'linear-gradient(to right, #6a11cb, #2575fc)',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <h1 className='display-4 fw-bold mb-4'>Organiza tu día, ¡sin estrés!</h1>
      <p className='lead mb-5'>
        Agrega tus pendientes, lleva un control perfecto y haz que cada día sea
        más productivo. Nosotros te ofrecemos calidad y simplicidad para que no
        olvides nada importante.
      </p>
      <button
        className='btn btn-light btn-lg px-4 py-2 mb-5'
        onClick={() => {
          window.location.href = '/register';
        }}
        style={{ borderRadius: '30px', fontWeight: 'bold' }}
      >
        ¡Comienza ahora!
      </button>

      <div className='container text-center'>
        <h2 className='mb-4 text-uppercase fw-bold'>¿Por qué elegirnos?</h2>
        <div className='row'>
          <div className='col-md-4'>
            <div
              className='card shadow'
              style={{ borderRadius: '15px' }}
            >
              <div className='card-body'>
                <h5 className='card-title text-primary fw-bold'>
                  Fácil de usar
                </h5>
                <p className='card-text'>
                  Diseñado para que gestionar tus pendientes sea rápido y
                  sencillo.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div
              className='card shadow'
              style={{ borderRadius: '15px' }}
            >
              <div className='card-body'>
                <h5 className='card-title text-success fw-bold'>
                  Organización
                </h5>
                <p className='card-text'>
                  Mantén todas tus tareas en un solo lugar, ordenadas por
                  prioridad.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div
              className='card shadow'
              style={{ borderRadius: '15px' }}
            >
              <div className='card-body'>
                <h5 className='card-title text-danger fw-bold'>
                  Recordatorios
                </h5>
                <p className='card-text'>
                  No olvides nada con nuestras alertas personalizadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

import React from 'react';
import './App.css'; // Para los estilos

function App() {
  const downloadSong = () => {
    const link = document.createElement('a');
    link.href = 'cancion.mp3';
    link.download = 'cancion.mp3';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <header>
        <h1>Mi Música</h1>
        <p>¡Bienvenidos a mi mundo musical!</p>
      </header>

      <div className="container">
        <section className="player">
          <h2>Escucha mi última canción</h2>
          <audio controls>
            <source src="cancion.mp3" type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
          <p><button onClick={downloadSong}>Descargar Canción</button></p>
        </section>

        <section className="bio">
          <h2>Sobre mí</h2>
          <p>Soy [Tu Nombre], un artista apasionado por la música. Mi estilo combina [describe tu estilo, ej. pop, rock, electrónico] y busco conectar con el público a través de mis letras y melodías. ¡Espero que disfrutes mi trabajo!</p>
        </section>

        <section className="contact">
          <h2>Contacto</h2>
          <p>¿Quieres colaborar o simplemente charlar? Escríbeme a: <a href="mailto:tuemail@ejemplo.com">tuemail@ejemplo.com</a></p>
          <p>Sígueme en: <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer">Twitter</a> | <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener noreferrer">Instagram</a></p>
        </section>
      </div>

      <footer>
        <p>© 2025 [Tu Nombre]. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

// Error Boundary (opcional)
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Algo salió mal. Por favor, recarga la página.</h1>;
    }
    return this.props.children;
  }
}

export default function WrappedApp() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
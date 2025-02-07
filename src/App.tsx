import { useState } from 'react'
import flowerLogo from './assets/flower_icon_232533.svg'
import roseLogo from './assets/rose_icon.svg'
import vacatioLogo from './assets/vacation_icon.svg'
import travelLogo from './assets/travelicon.svg'
import emailjs from 'emailjs-com'

import './App.css'

function App() {
  
  const [isModalOpenYes, setIsModalOpenYes] = useState(false)
  const [isModalOpenNo, setIsModalOpenNo] = useState(false)
  const [buttonPosition, setButtonPosition] = useState({ left: '0px', top: '0px' });
  const [moved, setMoved] = useState(false);

  const yesButtonClick = async () => {
    setIsModalOpenYes(true);

    
    try {
      const result = await emailjs.send('service_ushk2wj', 'template_93hvbya', {
        to_email: 'luis13chipana@gmail.com',
        subject: 'Confirmación de San Valentín',
        message: 'El usuario ha aceptado la invitación para San Valentín.',
      }, 'QOugaMUZL3PTNzB0q');

      console.log('Correo enviado:', result.text);
    } catch (error) {
      console.error('Error al enviar el correo:', error);
    }
  }

  const noButtonClick = () => {
    if (!moved) {
      setMoved(true)
    }

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const newLeft = Math.random() * (windowWidth - 100);
    const newTop = Math.random() * (windowHeight - 50); 
    setButtonPosition({ left: `${newLeft}px`, top: `${newTop}px` });
  }

  const closeModal = () => {
    setIsModalOpenYes(false)
    setIsModalOpenNo(false)
  }

  return (
    <div >
        <div>
          <a href="https://www.youtube.com/watch?v=MiAoetOXKcY&list=RDGMEM6ijAnFTG9nX1G-kbWBUCJAVMMiAoetOXKcY&start_radio=1" target="_blank">
            <img src={flowerLogo} className="logo flower" alt="flower logo" />
          </a>
          <a href="https://www.youtube.com/watch?v=MiAoetOXKcY&list=RDGMEM6ijAnFTG9nX1G-kbWBUCJAVMMiAoetOXKcY&start_radio=1" target="_blank">
            <img src={travelLogo} className="logo flower" alt="travel logo" />
          </a>
          <a href="https://www.youtube.com/watch?v=VPRjCeoBqrI&list=RDVPRjCeoBqrI&start_radio=1" target="_blank">
            <img src={roseLogo} className="logo rose" alt="flower de rosa" />
          </a>
          <a href="https://www.youtube.com/watch?v=MiAoetOXKcY&list=RDGMEM6ijAnFTG9nX1G-kbWBUCJAVMMiAoetOXKcY&start_radio=1" target="_blank">
            <img src={vacatioLogo} className="logo flower" alt="vacation logo" />
          </a>
          <a href="https://www.youtube.com/watch?v=VPRjCeoBqrI&list=RDVPRjCeoBqrI&start_radio=1" target="_blank">
            <img src={flowerLogo} className="logo rose" alt="flower de rosa" />
          </a>
        </div>
        <div>
          {/* Sección para el video de YouTube */}
          <div className="video-container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/1w369oiQYbI" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <h1>Quieres ser mi San Valentín</h1>
        <h3>Quieres pasar un dia diferente en un viaje o Full day a Laraos.</h3>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
            <button onClick={yesButtonClick} style={{ marginRight: '10px' }}>
              ¡Sí, me encantaría! 💖
            </button>
            <button 
              onClick={noButtonClick} 
              style={{ position: moved ? 'absolute' : 'relative', left: buttonPosition.left, top: buttonPosition.top }}
            >
              No 😥
            </button>
          </div>
          <p>
            "Te quiero no solo por como eres, sino por como soy yo cuando estoy contigo." - Mario Benedetti
          </p>
        </div>
        <p className="read-the-docs">
          Perdoname si no puedo decirtelo en persona.
        </p>

        {isModalOpenYes && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2 style={{ color: "#ff69b4" }}>¡Qué emoción! 💖</h2>
              <p style={{ fontSize: "16px" }}>No sabes cuánto significa esto para mí. ✨</p>
              <p>Nos espera un día increíble, lleno de risas, momentos especiales y mucha alegría. 💕</p>
              <p>¡Nos vemos pronto! 💘</p>
            </div>
          </div>
        )}
        {isModalOpenNo && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2 style={{ color: "#ff69b4" }}>¡Está bien! 😊</h2>
              <p style={{ fontSize: "16px" }}>Lo importante es que seas feliz y disfrutes tu día. 💖</p>
              <p>Tal vez en otra ocasión podamos compartir un lindo momento juntos. ✨</p>
              <p>¡Te deseo un San Valentín lleno de alegría y amor! 💕</p>
            </div>
          </div>
        )}
    </div>
  )
}

export default App

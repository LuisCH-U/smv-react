import { useState } from 'react'
import flowerLogo from './assets/flower_icon_232533.svg'
import vacatioLogo from './assets/vacation_icon.svg'
import emailjs from 'emailjs-com'

import './App.css'

function App() {
  
  const [isModalOpenYes, setIsModalOpenYes] = useState(false)
  const [isModalOpenNo, setIsModalOpenNo] = useState(false)
  const [buttonPosition, setButtonPosition] = useState({ left: '0px', top: '0px' });
  const [moved, setMoved] = useState(false);
  const [buttonIndex, setButtonIndex] = useState(0);
  const buttonTexts = [
    'No 😥', '¿Estás segura? ☹',
    'Piénsalo de nuevo 🤔', '¿Segura que no? 😩', 'Ya lo pensaste bien? 🙁',
    '¿Qué dices? 😣', '¿Segura que no? 😕', 'No se acabarán las palabras 🙄',
    'Piénsalo, aún hay más frases 🤭', 'Sigues diciendo no 🤔',
    'Te vas a cansar 🤭', 'Lo programé con más de 10 mil caracteres 🙄',
    'Se seguirá moviendo más 😄', 'Y se movió otra vez 🙃',
    'Ya lo volviste a pensar...?', 'Si presionas "Sí", el bucle se termina 🤭',
    'Presionaste otra vez "No"...🥺', 'Se acabarán mis palabras 😣',
    '¿Qué más te diría para que digas que sí? 😩',
    'Mi paciencia es infinita 😌', 'No me rendiré 😏', 'Voy a seguir aquí hasta que digas que sí 😆',
    '¿No sientes un poquito de curiosidad? 👀', 'Me estás haciendo sufrir 😭',
    '¿Y si mejor intentamos? 😏', 'Si dices que sí, prometo que seré muy feliz 🥰',
    'Solo un pequeño "Sí", no hace daño 😜', 'Voy a seguir insistiendo 😆', 'No te arrepentirás 😉',
    'Una vez más, ¿segura? 🤨', 'Acepto terminos y condiciones 😇',
    '¿Qué tal si probamos dando en el Si? ', 'Solo una respuesta y todo cambiará ✨',
    'Imagina lo bonito que sería', '¿Me dirás que sí en la próxima? 😏',
    '¿Te estoy convenciendo un poquito? 🙃', 'Voy a insistir un poco +',
    'Esto es más persistente que el Wi-Fi de la NASA 🚀',
    'Merezco un "sí" solo por el esfuerzo, ¿no? 😂', 'Dicen que la paciencia tiene recompensa 😌',
    'Si sigues diciendo no, el botón explotará 💥 (broma) 🤭',
    'Voy a seguir aquí, esperando... ⏳', '¡Un "Sí" y te hago reír! 😂',
    '¿Sabías que decir "Sí" trae buena suerte? 🍀', 'Ya no sé qué más escribir, pero quiero un "Sí" 😅',
    'Última oportunidad... (mentira, seguiré insistiendo) 😆',
    'El botón está triste por tantos "No" 😢', 'Si sigues presionando "No",...................',
    'Cuidado... si sigues diciendo "No", me volveré poeta ✍️😂',
    'Estoy usando todas mis líneas de código para convencerte 😏',
    'Solo di "Sí" y prometo que será la mejor decisión',
    'Imagina qué pasará si presionas "Sí"... (spoiler: algo bonito)',
    'Mi paciencia es más fuerte que tu resistencia 😌', 'Voy a seguir aquí, hasta el infinito ♾️',
    'Dale una oportunidad, ¿qué es lo peor que podría pasar? 😜',
    'Este botón también quiere que digas que sí 😆',
    'Estás a un "Sí" de hacerme la persona más feliz del mundo',
    '¿Y si el destino nos está guiando? 💫', '¡Última oportunidad!... Ok, mentira, seguiré insistiendo 😂',
    '¡Estoy programado para convencerte! 🤖', '¿Qué harías si este fuera el último "No"? 🥺',
    'Acepto tus condiciones, pero solo si dices "Sí" 😏',
    '¡Dame una oportunidad y te sorprenderé! ✨',
    'Cada "No" que presionas, una estrella se apaga 🌟😂',
    '¿Sabías que decir "Sí" quema calorías? 💪🤣', 'Este botón ya quiere jubilarse, di "Sí" 😂',
    'Si llegaste hasta aquí, es porque en el fondo quieres decir "Sí" 😏',
    'Voy a seguir insistiendo, aunque pasen los años 😆', 'Cada "No" es un mini-infarto para mí 💔',
    '¿Te imaginas que al final digas "Sí"? Qué bonito sería',
    'El código no se detendrá hasta que aceptes 💻😏',
    'Una palabra, tres letras, cambia todo... 🤗', 'Tómate tu tiempo, pero recuerda: "Sí" es una linda palabra 😊',
    'Los códigos dicen que el "Sí" es el camino correcto 🖥️✨',
    'No quiero presionarte... pero sí quiero que digas "Sí" 😆',
    'Voy a seguir aquí, esperando pacientemente ⏳', 'Soy más terco que el Wi-Fi en la lluvia ☔😂',
    '¿Qué tal si pruebas decir "Sí" solo una vez? 😜',
    'Cada "No" hace que escriba más frases... 😏', 'Al menos considera la posibilidad... 😚',
    'Voy a seguir intentándolo hasta el final 😆',
    'Si has leído hasta aquí, mereces una recompensa 🏆 (un "Sí" sería perfecto 🤭)',
    'Cada "No" me da más ganas de seguir 💪😏', '¿No te cansas de presionar "No"? 😆',
    'El algoritmo ya predijo que terminarás diciendo "Sí" 😂', 'Dale un "Sí", esto es para mas... ✨',
];


  const sendEmail = async (response: 'S' | 'N')  =>{
    try {
      const result = await emailjs.send('service_ushk2wj', 'template_93hvbya', {
        to_email: 'luis13chipana@gmail.com',
        subject: 'Confirmación de San Valentín',
        message: `El usuario ha ${response === 'S' ? 'aceptado' : 'rechazado'}  la invitación para San Valentín.`,
      }, 'QOugaMUZL3PTNzB0q');
      console.log('Correo enviado:', result.text);
    } catch (error) {
      console.error('Error al enviar el correo:', error);
    }
  }

  const yesButtonClick = async () => {
    setIsModalOpenYes(true);
    sendEmail('S');
  }

  const noButtonClick = () => {
    if (!moved) {
      setMoved(true);
    }
    //sendEmail('N');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const newLeft = Math.random() * (windowWidth - 100);
    const newTop = Math.random() * (windowHeight - 50); 
    setButtonPosition({ left: `${newLeft}px`, top: `${newTop}px` });

    setButtonIndex((prevIndex) => (prevIndex + 1) % buttonTexts.length);
  }

  const closeModal = () => {
    setIsModalOpenYes(false)
    setIsModalOpenNo(false)
  }

  return (
    <div >
        <div>
          {/*<a href="https://www.youtube.com/watch?v=MiAoetOXKcY&list=RDGMEM6ijAnFTG9nX1G-kbWBUCJAVMMiAoetOXKcY&start_radio=1" target="_blank">
            <img src={flowerLogo} className="logo flower" alt="flower logo" />
          </a>
          <a href="https://www.youtube.com/watch?v=MiAoetOXKcY&list=RDGMEM6ijAnFTG9nX1G-kbWBUCJAVMMiAoetOXKcY&start_radio=1" target="_blank">
            <img src={travelLogo} className="logo flower" alt="travel logo" />
          </a>
          <a href="https://www.youtube.com/watch?v=VPRjCeoBqrI&list=RDVPRjCeoBqrI&start_radio=1" target="_blank">
            <img src={roseLogo} className="logo rose" alt="flower de rosa" />
          </a>*/}
          <a href="https://www.youtube.com/watch?v=MiAoetOXKcY&list=RDGMEM6ijAnFTG9nX1G-kbWBUCJAVMMiAoetOXKcY&start_radio=1" target="_blank">
            <img src={vacatioLogo} className="logo flower" alt="vacation logo" />
          </a>
          <a href="https://www.youtube.com/watch?v=VPRjCeoBqrI&list=RDVPRjCeoBqrI&start_radio=1" target="_blank">
            <img src={flowerLogo} className="logo rose" alt="flower de rosa" />
          </a>
        </div>
        <div>
          <div className="video-container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/0b3bZqCterA?autoplay=1&mute=0"
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <h1>Ruth, en este San Valentín quiero regalarte más que palabras.</h1>
        <h3>✨ Ruth, Dios nos ha regalado un mundo lleno de maravillas, y quiero invitarte a descubrir una de ellas. Imagina un día lejos del ruido, donde el cielo azul nos abrace, el viento acaricie nuestras almas y cada rincón nos recuerde el amor perfecto del Creador. Quiero compartir contigo un viaje donde nuestra fe se fortalezca, nuestra amistad se ilumine y nuestros corazones encuentren paz en la belleza de algun lugar. Que sea un día para agradecer, reír y llenarnos de la presencia de Dios en cada susurro de la naturaleza. ¿Me Acompañas? ✨🙏💙</h3>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
            <button onClick={yesButtonClick} style={{ marginRight: '10px' }}>
              ¡Sí 🤗!
            </button>
            <button 
              onClick={noButtonClick} 
              style={{ position: moved ? 'absolute' : 'relative', left: buttonPosition.left, top: buttonPosition.top }}
            >
              {buttonTexts[buttonIndex]}
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

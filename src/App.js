import './App.css';
import imgFreeCodeCampLogo from './img/freeCodeCamp-Logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import {useState} from 'react';//hook importante

function App() {

  //para trabajar con estados en componentes funcionales
  // cuando se actualiza el estado de un componente funcional, react lo actualiza
  const [numClics, setNumClics] = useState(0);//usamos hook

  const manejarClic = ()=>{
    console.log("clic");
    setNumClics(numClics+1);
  }
  const reiniciarContador = ()=>{
    console.log("Reiniciar");    
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={imgFreeCodeCampLogo}
          alt='Logo de freecoddecamp'
        />        
      </div>
      <div className='contenedor-principal'>
          <Contador
            numClics={ numClics }
          />
          <Boton
            texto='Clic'
            esBotonDeClic={true}
            manejarClic={manejarClic}
          />
          <Boton
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={reiniciarContador}
          />
        </div>
    </div>
  );
}

export default App;

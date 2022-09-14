import '../style/Contador.css'
import '../style/Boton.css'
import React from 'react';

function diferenciarTipoBoton(esBotonDeClic){
    return (esBotonDeClic ? 'boton-clic':'boton-reiniciar')
}

//usamos desestruracion para extraer una sola propiedad
function Boton({texto, esBotonDeClic, manejarClic}){
    return (
        //operador ternario
        <button
            className={ diferenciarTipoBoton(esBotonDeClic) }
            onClick={manejarClic}
        >
            {texto}
        </button>
    );
}

export default Boton;//solo se puede importar un elemento por archivo con export default
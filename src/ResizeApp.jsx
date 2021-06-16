import React, { useState, useEffect } from 'react';

function ResizeApp() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // si el ancho de la pantalla es menor a 768px esta constante tendra valor true, de lo contrario sera false
  const isMobile = windowWidth < 768;

  // aqui agregamos un escuchador al resize de la pantalla y ejecutamos una funcion anonima cada vez que cambie, asi mismo guardando en el estado el nuevo valor de windowWidht
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    // el retornar una funcion dentro de useEffect nos permite tener un manejo muy similar a componendidUNmount, ya que nos permite desmontar en este caso los listeners que habiamos creado al cargar el componente. asi que al desmontarlo se eliminaran, y asi podremos evitar errores de memory leak en nuestra app.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <h1>{windowWidth}</h1>
      {isMobile && <h2>Show only mobile device</h2>}
    </div>
  );
}

export default ResizeApp;

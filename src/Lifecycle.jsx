import React, { useState, useEffect } from 'react';

// el prerender no es el mejor lugar para poner logica pesada ya que se ejecutara con el import desde su componente padre, asi no se reendere completamente el componente.
console.log('Prerender');

function Lifecycle(props) {
  console.log('Logic render');
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // useEffect sin arreglo de dependencias al final se ejecuta cada vez que el componente se renderea, o cada vez que algo en el componente se actualiza.
  useEffect(() => {
    console.log('useEffect no dependency');
    return () => {
      console.log('cleanup useEffect no dependency');
    };
  });

  // dato importante: los hooks se van a ejecutar en el orden en el que se hayan escrito, en este caso se ejecutara primero useEffect sin arreglo de dependencias al final

  // los efectos se ejecutaran despues de pintar el componente.

  // useEffect con arreglo vacio de dependencias al final, se va a ejecutar solo la primera vez que cargue el componente, no se va a volver a ejecutar jamas.
  useEffect(() => {
    console.log('useEffect [] empty');
    return () => {
      console.log('cleanup useEffect [] empty');
    };
  }, []);

  // useEffect aqui se ejecutara cada vez que cambie el estado counter1
  useEffect(() => {
    console.log('useEffect [counter1]');
    return () => {
      console.log('cleanup useEffect [counter1]');
    };
  }, [counter1]);

  // este efecto se ejecutara cada vez que counter1 y counter2 cambien su estado
  useEffect(() => {
    console.log('useEffect [counter1, counter2]');
    return () => {
      console.log('cleanup useEffect [counter1. counter2]');
    };
  }, [counter1, counter2]);

  return (
    <div>
      {console.log('return render')}
      <h1>Clicks Counter 1: {counter1}</h1>
      <h1>Clicks Counter 2: {counter2}</h1>
      <button onClick={() => setCounter1(counter1 + 1)}>
        Increment counter 1
      </button>
      <button onClick={() => setCounter2(counter2 + 1)}>
        Increment counter 2
      </button>
    </div>
  );
}

export default Lifecycle;

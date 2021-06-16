import React, { useState } from 'react';
// import ResizeApp from './ResizeApp';
// import FetchCard from './FetchCard';
import Lifecycle from './Lifecycle';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      {/* el operador al ! al lado de show, nos permitira hacer switch entre true y false cada vez que presiones el boton. */}
      <button onClick={() => setShow(!show)}>show/hide</button>
      {show && <Lifecycle />}
      {/* <FetchCard /> */}
      {/* {show && <ResizeApp />} */}
    </div>
  );
}

export default App;

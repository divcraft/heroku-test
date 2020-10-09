import React, { useState } from 'react';

const Navbar = () => {
   const [color, setColor] = useState('red')
   const handleColor = () => {
      color === 'red' ? setColor('blue') : setColor('red')
   }
   return (
      <>
         <nav>
            <ul onClick={handleColor} style={{ color }}>
               <li>Home</li>
               <li>About</li>
               <li>Gallery</li>
               <li>Contact</li>
            </ul>
         </nav>
         <h1>{color}</h1>
      </>
   );
}

export default Navbar;
// components/EmailButton.tsx
import React, { useState } from 'react';
import { CopyIcon } from './icons/interface_icons';

const EmailButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [buttonText, setButtonText] = useState('Copy E-Mail');
  const email = 'frederickros45@gmail.com';

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setButtonText('E-Mail copied!');
        setTimeout(() => {
          setButtonText('Copy E-Mail');
        }, 2000); // Cambia a 2000 milisegundos (2 segundos)
      })
      .catch((err) => {
        console.error('Error al copiar el email: ', err);
      });
  };

  return (
    <button
      className='group flex w-fit items-center gap-2 border border-grisMid text-negro hover:text-blanco hover:border-verdeSage hover:bg-verdeSage rounded-lg p-3 transition-all ease-aggresive duration-700'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <CopyIcon />
      {buttonText}
    </button>
  );
};

export default EmailButton;

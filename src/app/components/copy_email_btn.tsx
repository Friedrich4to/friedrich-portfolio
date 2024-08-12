// components/EmailButton.tsx
import React, { useState } from 'react';
import { CopyIcon } from './icons/interface_icons';

const EmailButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [buttonText, setButtonText] = useState('work@fredpimentel.com');
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
        setButtonText('Email copiado!');
        setTimeout(() => {
          setButtonText('work@fredpimentel.com');
        }, 2000); // Cambia a 2000 milisegundos (2 segundos)
      })
      .catch((err) => {
        console.error('Error al copiar el email: ', err);
      });
  };

  return (
    <button
      className='group flex w-fit items-center gap-2 border hover:border-verdeSage hover:bg-verdeSage hover:text-blanco rounded-lg p-2 text-xs font-light transition-all'
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

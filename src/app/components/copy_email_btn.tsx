// components/EmailButton.tsx
import React, { useState } from 'react';

const EmailButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);
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
        alert('Email copiado al portapapeles');
      })
      .catch((err) => {
        console.error('Error al copiar el email: ', err);
      });
  };

  return (
    <button
      className='group flex items-center gap-2 hover:bg-verdeSage border hover:border-verdeSage hover:text-blanco rounded-lg p-2 text-xs font-light transition-all'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <span className='w-3 h-5 bg-negro group-hover:bg-blanco transition-all'></span>
      {hovered ? 'Copy Email' : 'work@fredpimentel.com'}
    </button>
  );
};

export default EmailButton;

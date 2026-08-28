import React from 'react';
import realLogo from '../assets/images/Logo (1).png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className = '',
  showTagline = false
}) => {
  // Height sizing for responsive layouts
  const heightClass = {
    sm: 'h-10 sm:h-11',
    md: 'h-14 sm:h-16',
    lg: 'h-20 sm:h-24',
    xl: 'h-28 sm:h-36'
  }[size];

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <img
        src={realLogo}
        alt="Felix Gastro — Cardápio Digital & Eventos"
        className={`w-auto ${heightClass} object-contain drop-shadow-md`}
        loading="eager"
      />

      {showTagline && (
        <span className="font-display text-[11px] text-[#f0a066] uppercase tracking-widest mt-1 block font-medium">
          Comida Caseira & Regional
        </span>
      )}
    </div>
  );
};

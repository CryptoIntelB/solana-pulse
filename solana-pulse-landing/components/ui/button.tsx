import React from 'react';
import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline';
};

export const Button: React.FC<ButtonProps> = ({ variant = 'default', className, ...props }) => {
  const baseStyles =
    'px-4 py-2 rounded-md font-semibold transition-colors duration-200';

  const variants = {
    default: 'bg-purple-600 hover:bg-purple-700 text-white',
    outline: 'border border-white text-white hover:bg-white hover:text-black',
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    />
  );
};

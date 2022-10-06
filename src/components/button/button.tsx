import React, { FC } from 'react';
import './button.css';

interface ButtonProps {
  children?: string,
  className: string
  click?: () => void,
}

export const Button: FC<ButtonProps> = ({click, children, className }) => {
  return <button onClick={click} className={className}>{children}</button>;
};

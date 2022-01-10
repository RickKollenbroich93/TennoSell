import type { ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  active?: boolean;
};
function Button({ children, className, active }: ButtonProps): JSX.Element {
  return (
    <button
      className={`${styles.button} ${className} ${active && styles.active}`}
    >
      {children}
    </button>
  );
}

export default Button;

import { AllColors } from '@/types/colors';
import { FontSize } from '@/types/text';
import { ElementType, HTMLAttributes } from 'react';
import Spinner from '../Spinner/Spinner';
import styles from './Button.module.scss';

export interface ButtonProps
  extends Omit<HTMLAttributes<HTMLElement>, 'className' | 'color'> {
  as?: ElementType;
  color?: AllColors;
  disabled?: boolean;
  isLoading?: boolean;
  ref?: React.RefObject<HTMLElement | null>;
  size?: FontSize;
  name?: string;
  variant?: 'filled' | 'outlined' | 'text';
  value?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  as: HTMLTag = 'button',
  children,
  color = 'primary',
  disabled = false,
  isLoading = false,
  size = 'md',
  variant = 'filled',
  ...otherProps
}: ButtonProps) {
  const classNames = [
    styles['button'],
    styles[`button--size-${size}`],
    styles[`button--${color}-${variant}`],
  ];

  if (disabled) classNames.push(styles['button--disabled']);

  return (
    <HTMLTag
      disabled={disabled}
      className={classNames.join(' ')}
      {...otherProps}
    >
      {children}
      {isLoading && (
        <span className={styles.button__spinner}>
          <Spinner size="sm" />
        </span>
      )}
    </HTMLTag>
  );
}

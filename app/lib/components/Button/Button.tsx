import classNames from '@/services/utils/classNames';
import { AllColors } from '@/types/colors';
import { ElementType, HTMLAttributes, RefAttributes } from 'react';
import Spinner from '../Spinner/Spinner';
import styles from './Button.module.scss';

export interface ButtonProps
  extends Omit<HTMLAttributes<HTMLElement>, 'color'>,
    RefAttributes<HTMLElement> {
  as?: ElementType;
  color?: AllColors;
  disabled?: boolean;
  isLoading?: boolean;
  ref?: React.RefObject<HTMLElement | null>;
  size?: 'sm' | 'md' | 'lg';
  name?: string;
  variant?: 'filled' | 'outlined' | 'text';
  value?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  as: HTMLTag = 'button',
  className,
  children,
  color = 'primary',
  disabled = false,
  isLoading = false,
  size = 'md',
  variant = 'filled',
  ...otherProps
}: ButtonProps) {
  return (
    <HTMLTag
      disabled={disabled}
      className={classNames(
        styles['button'],
        styles[`button--size-${size}`],
        styles[`button--${color}-${variant}`],
        disabled && styles['button--disabled'],
        className,
      )}
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

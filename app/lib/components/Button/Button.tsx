import { BrandColors, DefaultColors, StatusColors } from '@/types/colors';
import { FontSize } from '@/types/text';
import { ElementType, HTMLAttributes } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps
  extends Omit<HTMLAttributes<HTMLElement>, 'className' | 'color'> {
  as?: ElementType;
  color?: DefaultColors | BrandColors | StatusColors;
  disabled?: boolean;
  rounded?: boolean;
  size?: FontSize;
  variant?: 'filled' | 'outlined' | 'text';
}

export default function Button({
  as: HTMLTag = 'button',
  children,
  color = 'primary',
  disabled = false,
  rounded = false,
  size = 'md',
  variant = 'filled',
  ...otherProps
}: ButtonProps): JSX.Element {
  const classNames = [
    styles['button'],
    styles[`button--size-${size}`],
    styles[`button--${color}-${variant}`],
  ];

  if (rounded) classNames.push(styles['button--rounded']);
  if (disabled) classNames.push(styles['button--disabled']);

  return (
    <HTMLTag
      disabled={disabled}
      className={classNames.join(' ')}
      {...otherProps}
    >
      {children}
    </HTMLTag>
  );
}

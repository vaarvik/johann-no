import classNames from '@/services/utils/classNames';
import { ElementType, HTMLAttributes } from 'react';
import styles from './Container.module.scss';

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  as?: ElementType;
  textAlign?: 'left' | 'center' | 'right';
  width?: 'narrow' | 'text' | 'default' | 'wide' | 'full';
}

export default function Container({
  as: HTMLTag = 'div',
  textAlign = 'left',
  width = 'default',
  children,
  ...otherProps
}: Props) {
  return (
    <HTMLTag
      className={classNames(
        styles['container'],
        styles[`container--width-${width}`],
        textAlign && styles[`container--text-${textAlign}`],
      )}
      {...otherProps}
    >
      {children}
    </HTMLTag>
  );
}

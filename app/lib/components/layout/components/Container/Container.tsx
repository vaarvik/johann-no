import { ElementType, HTMLAttributes } from 'react';
import styles from './Container.module.scss';

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  as?: ElementType;
  textAlign?: 'left' | 'center' | 'right';
  width?: 'narrow' | 'text' | 'default' | 'wide';
}

export default function Container({
  as: HTMLTag = 'div',
  textAlign = 'left',
  width = 'default',
  children,
  ...otherProps
}: Props) {
  const classNames = [styles['container'], styles[`container--width-${width}`]];

  if (textAlign) classNames.push(styles[`container--text-${textAlign}`]);

  return (
    <HTMLTag className={classNames.join(' ')} {...otherProps}>
      {children}
    </HTMLTag>
  );
}

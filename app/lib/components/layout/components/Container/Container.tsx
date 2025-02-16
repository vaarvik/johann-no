import classNames from '@/services/utils/classNames';
import { generateClassNamesByStringOrObject } from '@/services/utils/generateClassNamesByStringOrObject';
import { ScreenOptions, Widths } from '@/types/layout';
import { ElementType, HTMLAttributes, RefAttributes } from 'react';
import styles from './Container.module.scss';

interface Props
  extends HTMLAttributes<HTMLElement>,
    RefAttributes<HTMLElement> {
  as?: ElementType;
  textAlign?: 'left' | 'center' | 'right';
  width?: Widths | ScreenOptions<Widths>;
}

export default function Container({
  as: HTMLTag = 'div',
  className,
  textAlign = 'left',
  width = 'default',
  children,
  ...otherProps
}: Props) {
  const widthClassNames = generateClassNamesByStringOrObject(
    width,
    styles,
    'container--width',
  );

  return (
    <HTMLTag
      className={classNames(
        styles['container'],
        ...widthClassNames,
        textAlign && styles[`container--text-${textAlign}`],
        className,
      )}
      {...otherProps}
    >
      {children}
    </HTMLTag>
  );
}

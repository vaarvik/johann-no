import { ElementType, HTMLAttributes } from 'react';
import styles from './GridItem.module.scss';

type GridItemOptions = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  as?: ElementType;
  columnStart?: GridItemOptions;
  columnEnd?: GridItemOptions;
  rowStart?: GridItemOptions;
  rowEnd?: GridItemOptions;
}

export default function GridItem({
  as: HTMLTag = 'div',
  columnStart,
  columnEnd,
  rowStart,
  rowEnd,
  children,
  ...otherProps
}: Props): JSX.Element {
  const classNames = [];

  if (columnStart) {
    classNames.push(styles[`grid-item--column-start-${columnStart}`]);
  }
  if (columnEnd) {
    classNames.push(styles[`grid-item--column-end-${columnEnd}`]);
  }
  if (rowStart) {
    classNames.push(styles[`grid-item--row-start-${rowStart}`]);
  }
  if (rowEnd) {
    classNames.push(styles[`grid-item--row-end-${rowEnd}`]);
  }

  return (
    <HTMLTag className={classNames.join(' ')} {...otherProps}>
      {children}
    </HTMLTag>
  );
}

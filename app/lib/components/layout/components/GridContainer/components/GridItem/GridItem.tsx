import classNames from '@/services/utils/classNames';
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
}: Props) {
  return (
    <HTMLTag
      className={classNames(
        columnStart && styles[`grid-item--column-start-${columnStart}`],
        columnEnd && styles[`grid-item--column-end-${columnEnd}`],
        rowStart && styles[`grid-item--row-start-${rowStart}`],
        rowEnd && styles[`grid-item--row-end-${rowEnd}`],
      )}
      {...otherProps}
    >
      {children}
    </HTMLTag>
  );
}

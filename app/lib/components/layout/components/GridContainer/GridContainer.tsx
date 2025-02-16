import classNames from '@/services/utils/classNames';
import { generateClassNamesByStringOrObject } from '@/services/utils/generateClassNamesByStringOrObject';
import hasOnlyChildrenOfType from '@/services/utils/hasChildrenOfType';
import { ScreenOptions } from '@/types/layout';
import { SpacingVariantXY } from '@/types/spacing';
import { ElementType, HTMLAttributes, RefAttributes } from 'react';
import styles from './GridContainer.module.scss';
import GridItem from './components/GridItem/GridItem';

export type GridCellOptions = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Props
  extends HTMLAttributes<HTMLElement>,
    RefAttributes<HTMLElement> {
  as?: ElementType;
  columns: GridCellOptions | ScreenOptions<GridCellOptions>;
  gap?: SpacingVariantXY;
  rows: GridCellOptions | ScreenOptions<GridCellOptions>;
}

export default function GridContainer({
  as: HTMLTag = 'div',
  children,
  className,
  columns,
  gap = '0',
  rows,
  ...otherProps
}: Props) {
  if (!hasOnlyChildrenOfType(children, GridItem)) {
    throw new Error(
      `All direct children of ${GridContainer.name} must be ${GridItem.name}.`,
    );
  }

  const columnsClassNames = generateClassNamesByStringOrObject(
    columns,
    styles,
    'grid-container--columns',
  );

  const rowsClassNames = generateClassNamesByStringOrObject(
    rows,
    styles,
    'grid-container--rows',
  );

  const gapClassNames = generateClassNamesByStringOrObject(
    gap,
    styles,
    'grid-container--gap',
  );

  return (
    <HTMLTag
      className={classNames(
        styles['grid-container'],
        ...columnsClassNames,
        ...rowsClassNames,
        ...gapClassNames,
        className,
      )}
      {...otherProps}
    >
      {children}
    </HTMLTag>
  );
}

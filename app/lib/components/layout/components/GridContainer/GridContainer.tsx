import { getSpacingClassNames } from '@/components/layout/services/utils/getSpacingClassNames';
import { SpacingVariantXY } from '@/types/spacing';
import { ElementType, HTMLAttributes } from 'react';
import hasOnlyChildrenOfType from '../../services/utils/hasChildrenOfType';
import styles from './GridContainer.module.scss';
import GridItem from './components/GridItem/GridItem';

type GridCellOptions = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  as?: ElementType;
  columns: GridCellOptions;
  gap?: SpacingVariantXY;
  rows: GridCellOptions;
}

export default function GridContainer({
  as: HTMLTag = 'div',
  children,
  columns,
  gap,
  rows,
  ...otherProps
}: Props): JSX.Element {
  if (!hasOnlyChildrenOfType(children, GridItem)) {
    throw new Error(
      `All direct children of ${GridContainer.name} must be ${GridItem.name}.`,
    );
  }
  const classNames = [
    styles['grid-container'],
    styles[`grid-container--columns-${columns}`],
    styles[`grid-container--rows-${rows}`],
    ...getSpacingClassNames(gap, styles, 'grid-container--gap'),
  ];

  return (
    <HTMLTag className={classNames.join(' ')} {...otherProps}>
      {children}
    </HTMLTag>
  );
}

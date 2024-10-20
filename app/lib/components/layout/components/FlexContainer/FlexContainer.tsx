import { getSpacingClassNames } from '@/components/layout/services/utils/getSpacingClassNames';
import { SpacingVariantXY } from '@/types/spacing';
import { ElementType, HTMLAttributes } from 'react';
import hasOnlyChildrenOfType from '../../services/utils/hasChildrenOfType';
import styles from './FlexContainer.module.scss';
import FlexItem from './components/FlexItem/FlexItem';

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  as?: ElementType;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  fitToParent?: boolean;
  fitToScreen?: boolean;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: SpacingVariantXY;
}

export default function FlexContainer({
  as: HTMLTag = 'div',
  direction = 'row',
  fitToParent = false,
  fitToScreen = false,
  justify,
  align,
  wrap = 'wrap',
  gap,
  children,
  ...otherProps
}: Props): JSX.Element {
  if (!hasOnlyChildrenOfType(children, FlexItem)) {
    throw new Error(
      `All direct children of ${FlexContainer.name} must be ${FlexItem.name}.`,
    );
  }

  const classNames = [
    styles['flex-container'],
    styles[`flex-container--direction-${direction}`],
    styles[`flex-container--wrap-${wrap}`],
    ...getSpacingClassNames(gap, styles, 'flex-container--gap'),
  ];

  if (align) classNames.push(styles[`flex-container--align-${align}`]);
  if (justify) classNames.push(styles[`flex-container--justify-${justify}`]);
  if (fitToParent) classNames.push(styles[`flex-container--fit-to-parent`]);
  if (fitToScreen) classNames.push(styles[`flex-container--fit-to-screen`]);

  return (
    <HTMLTag className={classNames.join(' ')} {...otherProps}>
      {children}
    </HTMLTag>
  );
}

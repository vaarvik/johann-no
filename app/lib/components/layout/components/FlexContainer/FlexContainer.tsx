import { generateClassNamesByStringOrObject } from '@/services/utils/generateClassNamesByStringOrObject';
import hasOnlyChildrenOfType from '@/services/utils/hasChildrenOfType';
import { ScreenOptions } from '@/types/layout';
import { SpacingVariantXY } from '@/types/spacing';
import { ElementType, HTMLAttributes } from 'react';
import styles from './FlexContainer.module.scss';
import FlexItem from './components/FlexItem/FlexItem';

type FlexDirectionOptions = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type FlexJustifyOptions =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type FlexAlignOptions =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline';
type FlexWrapOptions = 'nowrap' | 'wrap' | 'wrap-reverse';

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  as?: ElementType;
  direction?: FlexDirectionOptions | ScreenOptions<FlexDirectionOptions>;
  fitToParent?: boolean;
  fitToScreen?: boolean;
  justify?: FlexJustifyOptions | ScreenOptions<FlexJustifyOptions>;
  align?: FlexAlignOptions | ScreenOptions<FlexAlignOptions>;
  wrap?: FlexWrapOptions;
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
}: Props) {
  if (!hasOnlyChildrenOfType(children, FlexItem)) {
    throw new Error(
      `All direct children of ${FlexContainer.name} must be ${FlexItem.name}.`,
    );
  }

  const classNames = [
    styles['flex-container'],
    ...generateClassNamesByStringOrObject(
      direction,
      styles,
      'flex-container--direction',
    ),
    styles[`flex-container--wrap-${wrap}`],
  ];

  if (gap)
    classNames.push(
      ...generateClassNamesByStringOrObject(gap, styles, 'flex-container--gap'),
    );

  if (align)
    classNames.push(
      ...generateClassNamesByStringOrObject(
        align,
        styles,
        'flex-container--align',
      ),
    );

  if (justify)
    classNames.push(
      ...generateClassNamesByStringOrObject(
        justify,
        styles,
        'flex-container--justify',
      ),
    );

  if (fitToParent) classNames.push(styles[`flex-container--fit-to-parent`]);
  if (fitToScreen) classNames.push(styles[`flex-container--fit-to-screen`]);

  return (
    <HTMLTag className={classNames.join(' ')} {...otherProps}>
      {children}
    </HTMLTag>
  );
}

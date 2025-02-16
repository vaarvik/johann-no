import classNames from '@/services/utils/classNames';
import { generateClassNamesByStringOrObject } from '@/services/utils/generateClassNamesByStringOrObject';
import hasOnlyChildrenOfType from '@/services/utils/hasChildrenOfType';
import { ScreenOptions } from '@/types/layout';
import { SpacingVariantXY } from '@/types/spacing';
import { ElementType, HTMLAttributes, RefAttributes } from 'react';
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

interface Props
  extends HTMLAttributes<HTMLElement>,
    RefAttributes<HTMLElement> {
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
  className,
  direction = 'row',
  fitToParent = false,
  fitToScreen = false,
  justify,
  align,
  wrap = 'wrap',
  gap = '0',
  children,
  ...otherProps
}: Props) {
  if (!hasOnlyChildrenOfType(children, FlexItem)) {
    throw new Error(
      `All direct children of ${FlexContainer.name} must be ${FlexItem.name}.`,
    );
  }

  const directionClassNames = generateClassNamesByStringOrObject(
    direction,
    styles,
    'flex-container--direction',
  );

  const justifyClassNames = justify
    ? generateClassNamesByStringOrObject(
        justify,
        styles,
        'flex-container--justify',
      )
    : [];

  const alignClassNames = align
    ? generateClassNamesByStringOrObject(align, styles, 'flex-container--align')
    : [];

  const gapClassNames = generateClassNamesByStringOrObject(
    gap,
    styles,
    'flex-container--gap',
  );

  return (
    <HTMLTag
      className={classNames(
        styles['flex-container'],
        styles[`flex-container--wrap-${wrap}`],
        fitToParent && styles[`flex-container--fit-to-parent`],
        fitToScreen && styles[`flex-container--fit-to-screen`],
        ...directionClassNames,
        ...justifyClassNames,
        ...alignClassNames,
        ...gapClassNames,
        className,
      )}
      {...otherProps}
    >
      {children}
    </HTMLTag>
  );
}

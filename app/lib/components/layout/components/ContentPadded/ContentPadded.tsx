import classNames from '@/services/utils/classNames';
import { generateClassNamesByStringOrObject } from '@/services/utils/generateClassNamesByStringOrObject';
import { SpacingVariant } from '@/types/spacing';
import { ElementType, HTMLAttributes, RefAttributes } from 'react';
import styles from './ContentPadded.module.scss';

export interface ContentPaddedProps
  extends HTMLAttributes<HTMLElement>,
    RefAttributes<HTMLElement> {
  as?: ElementType;
  padding?: SpacingVariant;
}

export default function ContentPadded({
  as: HTMLTag = 'div',
  padding = '400',
  children,
  className,
  ...otherProps
}: ContentPaddedProps) {
  const paddingClassNames = generateClassNamesByStringOrObject(
    padding,
    styles,
    'content-padded--padding',
  );
  return (
    <HTMLTag
      className={classNames(...paddingClassNames, className)}
      {...otherProps}
    >
      {children}
    </HTMLTag>
  );
}

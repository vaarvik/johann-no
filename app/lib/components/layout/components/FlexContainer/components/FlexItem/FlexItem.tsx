import classNames from '@/services/utils/classNames';
import { ElementType, HTMLAttributes, RefAttributes } from 'react';
import styles from './FlexItem.module.scss';

interface Props
  extends HTMLAttributes<HTMLElement>,
    RefAttributes<HTMLElement> {
  as?: ElementType;
  order?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  grow?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  fillContent?: boolean;
  shrink?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  basis?:
    | 'auto'
    | 0
    | 5
    | 10
    | 15
    | 20
    | 25
    | 30
    | 35
    | 40
    | 45
    | 50
    | 55
    | 60
    | 65
    | 70
    | 75
    | 80
    | 85
    | 90
    | 95
    | 100;
  align?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch';
}

export default function FlexItem({
  as: HTMLTag = 'div',
  className,
  order,
  grow,
  fillContent,
  shrink,
  basis,
  align,
  children,
  ...otherProps
}: Props) {
  return (
    <HTMLTag
      className={classNames(
        styles['flex-item'],
        fillContent && 'fill-content',
        order !== undefined && styles[`flex-item--order-${order}`],
        grow !== undefined && styles[`flex-item--grow-${grow}`],
        shrink !== undefined && styles[`flex-item--shrink-${shrink}`],
        basis !== undefined && styles[`flex-item--basis-${basis}`],
        align && styles[`flex-item--align-${align}`],
        className,
      )}
      {...otherProps}
    >
      {children}
    </HTMLTag>
  );
}

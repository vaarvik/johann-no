import { ElementType, HTMLAttributes } from 'react';
import styles from './FlexItem.module.scss';

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
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
  order,
  grow,
  fillContent,
  shrink,
  basis,
  align,
  children,
  ...otherProps
}: Props): JSX.Element {
  const classNames = [];

  if (fillContent) classNames.push(styles['flex-item--fill-content']);
  if (order !== undefined) classNames.push(styles[`flex-item--order-${order}`]);
  if (grow !== undefined) classNames.push(styles[`flex-item--grow-${grow}`]);
  if (shrink !== undefined)
    classNames.push(styles[`flex-item--shrink-${shrink}`]);
  if (basis !== undefined) classNames.push(styles[`flex-item--basis-${basis}`]);
  if (align) classNames.push(styles[`flex-item--align-${align}`]);

  return (
    <HTMLTag className={classNames.join(' ')} {...otherProps}>
      {children}
    </HTMLTag>
  );
}

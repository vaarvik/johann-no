import { getSpacingClassNames } from '@/components/layout/services/utils/getSpacingClassNames';
import { SpacingVariant } from '@/types/spacing';
import { ElementType, HTMLAttributes } from 'react';
import styles from './ContentMargined.module.scss';

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  as?: ElementType;
  margin?: SpacingVariant;
}

export default function ContentMargined({
  as: HTMLTag = 'div',
  margin = 'md',
  children,
  ...otherProps
}: Props): JSX.Element {
  const classNames = getSpacingClassNames(
    margin,
    styles,
    'content-margined--margin',
  );

  return (
    <HTMLTag className={classNames.join(' ')} {...otherProps}>
      {children}
    </HTMLTag>
  );
}

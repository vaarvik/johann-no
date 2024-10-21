import { AllColors } from '@/types/colors';
import { ElementType, HTMLAttributes } from 'react';
import styles from './Section.module.scss';

export interface SectionProps
  extends Omit<HTMLAttributes<HTMLElement>, 'className' | 'color'> {
  as?: ElementType;
  color?: AllColors;
}

export default function Section({
  as: HTMLTag = 'section',
  color = 'lightest',
  children,
  ...otherProps
}: SectionProps): JSX.Element {
  const classNames = [styles['section'], styles[`section--color-${color}`]];

  return (
    <HTMLTag className={classNames.join(' ')} {...otherProps}>
      {children}
    </HTMLTag>
  );
}

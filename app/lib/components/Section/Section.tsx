import classNames from '@/services/utils/classNames';
import { AllColors } from '@/types/colors';
import { ElementType, HTMLAttributes, RefAttributes } from 'react';
import styles from './Section.module.scss';

export interface SectionProps
  extends Omit<HTMLAttributes<HTMLElement>, 'color'>,
    RefAttributes<HTMLElement> {
  as?: ElementType;
  color?: AllColors;
  backgroundImage?: string;
}

export default function Section({
  as: HTMLTag = 'section',
  color = 'neutral',
  className,
  backgroundImage,
  children,
  style,
  ...otherProps
}: SectionProps) {
  return (
    <HTMLTag
      className={classNames(
        styles['section'],
        styles[`section--color-${color}`],
        backgroundImage && styles[`section--has-bg-image`],
        className,
      )}
      style={{
        ...style,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : '',
      }}
      {...otherProps}
    >
      <div className={styles['section__content']}>{children}</div>
    </HTMLTag>
  );
}

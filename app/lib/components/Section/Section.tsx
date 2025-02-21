import classNames from '@/services/utils/classNames';
import { AllColors } from '@/types/colors';
import { ElementType, HTMLAttributes, ReactNode, RefAttributes } from 'react';
import FlexContainer from '../layout/components/FlexContainer/FlexContainer';
import FlexItem from '../layout/components/FlexContainer/components/FlexItem/FlexItem';
import styles from './Section.module.scss';

export interface SectionProps
  extends Omit<HTMLAttributes<HTMLElement>, 'color'>,
    RefAttributes<HTMLElement> {
  as?: ElementType;
  color?: AllColors;
  backgroundImage?: string;
  fillScreen?: boolean;
}

function FillContainer({ children }: { children: ReactNode }) {
  return (
    <FlexContainer fitToScreen align="center" justify="center">
      <FlexItem fillContent>{children}</FlexItem>
    </FlexContainer>
  );
}

export default function Section({
  as: HTMLTag = 'section',
  color = 'neutral',
  className,
  backgroundImage,
  children,
  style,
  fillScreen,
  ...otherProps
}: SectionProps) {
  const SectionElement = ({ children: c }: { children: ReactNode }) => (
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
      <div className={styles['section__content']}>{c}</div>
    </HTMLTag>
  );

  return fillScreen ? (
    <SectionElement>
      <FillContainer>{children}</FillContainer>
    </SectionElement>
  ) : (
    <SectionElement>{children}</SectionElement>
  );
}

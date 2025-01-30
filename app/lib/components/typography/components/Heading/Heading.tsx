import classNames from '@/services/utils/classNames';
import { AllColors } from '@/types/colors';
import React from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
  level: 1 | 2 | 3 | 4 | 5 | 6;
  color?: AllColors | 'currentcolor';
}

export default function Heading({
  as: CustomHTMLTag,
  color = 'currentcolor',
  children,
  className,
  level,
  ...props
}: HeadingProps) {
  const HTMLTag =
    CustomHTMLTag ?? (`h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6');

  return (
    <HTMLTag
      className={classNames(
        className,
        `h${level}`,
        `h${level}--color-${color}`,
      )}
      {...props}
    >
      {children}
    </HTMLTag>
  );
}

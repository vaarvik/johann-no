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
  const classNames = [`h${level}`, className ?? ''];

  if (color !== 'currentcolor') {
    classNames.push(`h${level}--color-${color}`);
  }

  return (
    <HTMLTag className={classNames.join(' ')} {...props}>
      {children}
    </HTMLTag>
  );
}

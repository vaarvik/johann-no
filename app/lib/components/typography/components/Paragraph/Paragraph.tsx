import { AllColors } from '@/types/colors';
import { FontSize } from '@/types/text';
import React from 'react';

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: 'p' | 'div';
  color?: AllColors | 'currentcolor';
  size?: FontSize;
}

export default function Paragraph({
  as: HTMLTag = 'p',
  color = 'currentcolor',
  children,
  className,
  size,
  ...props
}: ParagraphProps) {
  const classNames = ['p', className ?? ''];

  if (size) {
    classNames.push(`p--size-${size}`);
  }

  if (color !== 'currentcolor') {
    classNames.push(`p--color-${color}`);
  }

  return (
    <HTMLTag className={classNames.join(' ')} {...props}>
      {children}
    </HTMLTag>
  );
}

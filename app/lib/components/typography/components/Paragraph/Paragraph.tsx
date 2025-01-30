import classNames from '@/services/utils/classNames';
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
  return (
    <HTMLTag
      className={classNames(
        className,
        'p',
        `p--color-${color}`,
        `p--size-${size}`,
      )}
      {...props}
    >
      {children}
    </HTMLTag>
  );
}

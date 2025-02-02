import classNames from '@/services/utils/classNames';
import { AllColors } from '@/types/colors';
import { FontSize, FontWeight, LineHeight } from '@/types/text';
import React from 'react';

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: 'p' | 'div';
  color?: AllColors | 'currentcolor';
  lineHeight?: LineHeight;
  size?: FontSize;
  weight?: FontWeight;
}

export default function Paragraph({
  as: HTMLTag = 'p',
  color = 'currentcolor',
  children,
  className,
  lineHeight = 'normal',
  size = 'md',
  weight = 'normal',
  ...props
}: ParagraphProps) {
  return (
    <HTMLTag
      className={classNames(
        className,
        'p',
        `p--color-${color}`,
        `p--line-height-${lineHeight}`,
        `p--size-${size}`,
        `p--weight-${weight}`,
      )}
      {...props}
    >
      {children}
    </HTMLTag>
  );
}

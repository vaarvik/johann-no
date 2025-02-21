import classNames from '@/services/utils/classNames';
import { generateClassNamesByStringOrObject } from '@/services/utils/generateClassNamesByStringOrObject';
import { AllColors } from '@/types/colors';
import { ScreenOptions } from '@/types/layout';
import { FontSize, FontWeight, LineHeight } from '@/types/text';
import React from 'react';

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
  color?: AllColors | 'currentcolor';
  lineHeight?: LineHeight;
  size?: FontSize | ScreenOptions<FontSize>;
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
        ...generateClassNamesByStringOrObject(size, undefined, 'p--size'),
      )}
      {...props}
    >
      {children}
    </HTMLTag>
  );
}

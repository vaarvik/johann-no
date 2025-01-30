import { HTMLAttributes } from 'react';
import { AllColors } from './colors';
import { FontSize } from './text';

export interface DefaultIconProps {
  color?: AllColors | 'currentcolor';
  size?: FontSize;
}

export type IconSVGProps = DefaultIconProps &
  Omit<
    HTMLAttributes<SVGElement>,
    'className' | 'xmlns' | 'viewBox' | 'width' | 'height'
  >;

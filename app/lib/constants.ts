import { Directions, DirectionsXY, ScreenSizes } from './types/layout';

export const DIRECTIONS_XY: DirectionsXY[] = ['x', 'y'];

export const DIRECTIONS: Directions[] = [
  ...DIRECTIONS_XY,
  'top',
  'right',
  'bottom',
  'left',
];

export const SCREEN_SIZES: ScreenSizes[] = [
  'mobile',
  'tablet',
  'desktop',
  'large-desktop',
];

export const SCREEN_SIZES_MAP = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  'large-desktop': 1440,
};

import { Directions, DirectionsXY } from './types/directions';

export const SPACING_DIRECTIONS_XY: DirectionsXY[] = ['x', 'y'];

export const SPACING_DIRECTIONS: Directions[] = [
  ...SPACING_DIRECTIONS_XY,
  'top',
  'right',
  'bottom',
  'left',
];

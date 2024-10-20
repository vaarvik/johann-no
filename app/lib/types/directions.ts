export type DirectionsXY = 'x' | 'y';

export type Directions = DirectionsXY | 'top' | 'right' | 'bottom' | 'left';

export type DirectionAlignment = {
  vertical?: 'top' | 'bottom';
  horizontal?: 'left' | 'right';
};

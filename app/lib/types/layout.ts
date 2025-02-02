import { SCREEN_SIZES } from '@/constants';

export type Widths = 'narrow' | 'text' | 'default' | 'wide' | 'full';

export type DirectionsXY = 'x' | 'y';

export type Directions = DirectionsXY | 'top' | 'right' | 'bottom' | 'left';

export type DirectionAlignment = {
  vertical?: 'top' | 'bottom';
  horizontal?: 'left' | 'right';
};

type BaseDirectionsMap<T> = {
  [key in Directions]?: T;
};

type BaseDirectionsMapXY<T> = {
  [key in DirectionsXY]?: T;
};

export type ScreenSizes = 'mobile' | 'tablet' | 'desktop' | 'large-desktop';

export type ScreenOptions<T> = Partial<Record<ScreenSizes, T>>;

type ScreenSizesMap<T> = {
  [key in ScreenSizes]?: T | BaseDirectionsMap<T>;
};

type ScreenSizesMapXY<T> = {
  [key in ScreenSizes]?: T | BaseDirectionsMapXY<T>;
};

export type ScreenAndDirectionMap<T> = BaseDirectionsMap<T> & ScreenSizesMap<T>;

export type ScreenAndDirectionMapXY<T> = BaseDirectionsMapXY<T> &
  ScreenSizesMapXY<T>;

export function isScreenOptions<T>(
  property: T | ScreenOptions<T>,
): property is ScreenOptions<T> {
  if (!property) return false;
  return Object.keys(property).some(key =>
    SCREEN_SIZES.includes(key as ScreenSizes),
  );
}

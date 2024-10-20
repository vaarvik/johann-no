export type DefaultColors = 'foreground' | 'background';
export type BrandColors = 'primary' | 'secondary';
export type NeutralColors =
  | 'lightest'
  | 'lighter'
  | 'medium'
  | 'darker'
  | 'darkest';
export type StatusColors = 'error' | 'warning' | 'success' | 'info';

export type AllColors =
  | DefaultColors
  | BrandColors
  | StatusColors
  | NeutralColors;

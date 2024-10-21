export type Styles = {
  avatar: string;
  'avatar--clickable': string;
  'avatar--size-2xl': string;
  'avatar--size-2xs': string;
  'avatar--size-lg': string;
  'avatar--size-md': string;
  'avatar--size-sm': string;
  'avatar--size-xl': string;
  'avatar--size-xs': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;

export type Styles = {
  spin: string;
  spinner: string;
  'spinner--size-2xl': string;
  'spinner--size-3xl': string;
  'spinner--size-4xl': string;
  'spinner--size-5xl': string;
  'spinner--size-6xl': string;
  'spinner--size-7xl': string;
  'spinner--size-lg': string;
  'spinner--size-md': string;
  'spinner--size-sm': string;
  'spinner--size-xl': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;

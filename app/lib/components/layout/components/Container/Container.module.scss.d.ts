export type Styles = {
  container: string;
  'container--text-center': string;
  'container--text-left': string;
  'container--text-right': string;
  'container--width-2xs': string;
  'container--width-full': string;
  'container--width-lg': string;
  'container--width-md': string;
  'container--width-sm': string;
  'container--width-xl': string;
  'container--width-xs': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;

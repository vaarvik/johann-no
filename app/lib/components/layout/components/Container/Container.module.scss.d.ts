export type Styles = {
  container: string;
  'container--text-center': string;
  'container--text-left': string;
  'container--text-right': string;
  'container--width-default': string;
  'container--width-full': string;
  'container--width-narrow': string;
  'container--width-text': string;
  'container--width-wide': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;

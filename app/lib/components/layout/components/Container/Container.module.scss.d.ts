export type Styles = {
  container: string;
  'container--text-center': string;
  'container--text-desktop-center': string;
  'container--text-desktop-left': string;
  'container--text-desktop-right': string;
  'container--text-large-desktop-center': string;
  'container--text-large-desktop-left': string;
  'container--text-large-desktop-right': string;
  'container--text-left': string;
  'container--text-mobile-center': string;
  'container--text-mobile-left': string;
  'container--text-mobile-right': string;
  'container--text-right': string;
  'container--text-tablet-center': string;
  'container--text-tablet-left': string;
  'container--text-tablet-right': string;
  'container--width-default': string;
  'container--width-full': string;
  'container--width-narrow': string;
  'container--width-text': string;
  'container--width-wide': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;

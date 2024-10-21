export type Styles = {
  section: string;
  'section--color-background': string;
  'section--color-darker': string;
  'section--color-darkest': string;
  'section--color-error': string;
  'section--color-foreground': string;
  'section--color-info': string;
  'section--color-lighter': string;
  'section--color-lightest': string;
  'section--color-medium': string;
  'section--color-primary': string;
  'section--color-secondary': string;
  'section--color-success': string;
  'section--color-warning': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;

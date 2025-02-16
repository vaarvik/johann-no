export type Styles = {
  section: string;
  section__content: string;
  'section--color-background': string;
  'section--color-error': string;
  'section--color-foreground': string;
  'section--color-neutral': string;
  'section--color-primary': string;
  'section--color-success': string;
  'section--color-warning': string;
  'section--has-bg-image': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;

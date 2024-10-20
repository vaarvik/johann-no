export type Styles = {
  'exit-icon': string;
  'exit-icon--color-background': string;
  'exit-icon--color-darker': string;
  'exit-icon--color-darkest': string;
  'exit-icon--color-error': string;
  'exit-icon--color-foreground': string;
  'exit-icon--color-info': string;
  'exit-icon--color-lighter': string;
  'exit-icon--color-lightest': string;
  'exit-icon--color-medium': string;
  'exit-icon--color-primary': string;
  'exit-icon--color-secondary': string;
  'exit-icon--color-success': string;
  'exit-icon--color-warning': string;
  'exit-icon--size-2xl': string;
  'exit-icon--size-2xs': string;
  'exit-icon--size-lg': string;
  'exit-icon--size-md': string;
  'exit-icon--size-sm': string;
  'exit-icon--size-xl': string;
  'exit-icon--size-xs': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;

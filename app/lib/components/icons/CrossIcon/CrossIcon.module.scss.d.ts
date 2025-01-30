export type Styles = {
  'exit-icon': string;
  'exit-icon--color-background': string;
  'exit-icon--color-error': string;
  'exit-icon--color-foreground': string;
  'exit-icon--color-neutral': string;
  'exit-icon--color-primary': string;
  'exit-icon--color-success': string;
  'exit-icon--color-warning': string;
  'exit-icon--size-2xl': string;
  'exit-icon--size-3xl': string;
  'exit-icon--size-4xl': string;
  'exit-icon--size-5xl': string;
  'exit-icon--size-6xl': string;
  'exit-icon--size-lg': string;
  'exit-icon--size-md': string;
  'exit-icon--size-sm': string;
  'exit-icon--size-xl': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;

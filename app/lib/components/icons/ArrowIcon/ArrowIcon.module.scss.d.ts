export type Styles = {
  'arrow-icon': string;
  'arrow-icon--color-background': string;
  'arrow-icon--color-error': string;
  'arrow-icon--color-foreground': string;
  'arrow-icon--color-neutral': string;
  'arrow-icon--color-primary': string;
  'arrow-icon--color-success': string;
  'arrow-icon--color-warning': string;
  'arrow-icon--down': string;
  'arrow-icon--left': string;
  'arrow-icon--right': string;
  'arrow-icon--size-2xl': string;
  'arrow-icon--size-3xl': string;
  'arrow-icon--size-4xl': string;
  'arrow-icon--size-5xl': string;
  'arrow-icon--size-6xl': string;
  'arrow-icon--size-lg': string;
  'arrow-icon--size-md': string;
  'arrow-icon--size-sm': string;
  'arrow-icon--size-xl': string;
  'arrow-icon--up': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;

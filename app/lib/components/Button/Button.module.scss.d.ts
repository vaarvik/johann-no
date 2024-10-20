export type Styles = {
  button: string;
  'button--background-filled': string;
  'button--background-outlined': string;
  'button--background-text': string;
  'button--disabled': string;
  'button--error-filled': string;
  'button--error-outlined': string;
  'button--error-text': string;
  'button--foreground-filled': string;
  'button--foreground-outlined': string;
  'button--foreground-text': string;
  'button--info-filled': string;
  'button--info-outlined': string;
  'button--info-text': string;
  'button--primary-filled': string;
  'button--primary-outlined': string;
  'button--primary-text': string;
  'button--rounded': string;
  'button--secondary-filled': string;
  'button--secondary-outlined': string;
  'button--secondary-text': string;
  'button--size-2xl': string;
  'button--size-2xs': string;
  'button--size-lg': string;
  'button--size-md': string;
  'button--size-sm': string;
  'button--size-xl': string;
  'button--size-xs': string;
  'button--success-filled': string;
  'button--success-outlined': string;
  'button--success-text': string;
  'button--warning-filled': string;
  'button--warning-outlined': string;
  'button--warning-text': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;

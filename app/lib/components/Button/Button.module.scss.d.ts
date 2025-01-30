export type Styles = {
  button: string;
  button__spinner: string;
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
  'button--neutral-filled': string;
  'button--neutral-outlined': string;
  'button--neutral-text': string;
  'button--primary-filled': string;
  'button--primary-outlined': string;
  'button--primary-text': string;
  'button--size-lg': string;
  'button--size-md': string;
  'button--size-sm': string;
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

export type Styles = {
  modal: string;
  modal__button: string;
  modal__content: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;

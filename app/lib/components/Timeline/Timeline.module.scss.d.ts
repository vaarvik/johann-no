export type Styles = {
  'timeline-item': string;
  'timeline-item__content': string;
  'timeline-item__month': string;
  'timeline-item__position': string;
  'timeline-item__year': string;
  'timeline-item--visible': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;

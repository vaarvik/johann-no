export type Styles = {
  'swing-x-axis': string;
  'timeline-item': string;
  'timeline-item__company': string;
  'timeline-item__dates': string;
  'timeline-item__description': string;
  'timeline-item__left': string;
  'timeline-item__pole': string;
  'timeline-item__position': string;
  'timeline-item__right': string;
  'timeline-item--visible': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;

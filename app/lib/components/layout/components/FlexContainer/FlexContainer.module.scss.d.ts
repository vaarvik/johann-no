export type Styles = {
  'flex-container': string;
  'flex-container--align-baseline': string;
  'flex-container--align-center': string;
  'flex-container--align-flex-end': string;
  'flex-container--align-flex-start': string;
  'flex-container--align-stretch': string;
  'flex-container--direction-column': string;
  'flex-container--direction-column-reverse': string;
  'flex-container--direction-row': string;
  'flex-container--direction-row-reverse': string;
  'flex-container--fit-to-parent': string;
  'flex-container--fit-to-screen': string;
  'flex-container--gap-lg': string;
  'flex-container--gap-md': string;
  'flex-container--gap-sm': string;
  'flex-container--gap-x-lg': string;
  'flex-container--gap-x-md': string;
  'flex-container--gap-x-sm': string;
  'flex-container--gap-x-xl': string;
  'flex-container--gap-x-xs': string;
  'flex-container--gap-xl': string;
  'flex-container--gap-xs': string;
  'flex-container--gap-y-lg': string;
  'flex-container--gap-y-md': string;
  'flex-container--gap-y-sm': string;
  'flex-container--gap-y-xl': string;
  'flex-container--gap-y-xs': string;
  'flex-container--justify-center': string;
  'flex-container--justify-flex-end': string;
  'flex-container--justify-flex-start': string;
  'flex-container--justify-space-around': string;
  'flex-container--justify-space-between': string;
  'flex-container--justify-space-evenly': string;
  'flex-container--wrap-inherit': string;
  'flex-container--wrap-initial': string;
  'flex-container--wrap-nowrap': string;
  'flex-container--wrap-wrap': string;
  'flex-container--wrap-wrap-reverse': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;

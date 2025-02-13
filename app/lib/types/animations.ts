import { ScreenOptions } from './layout';

export type AnimationDelayValues = 200 | 500 | 700 | 1000 | 1500 | 2000;
export type AnimationDurationValues = 200 | 500 | 700 | 1000 | 1500 | 2000;
export type AnimationFadeValues =
  | '0'
  | '50px'
  | '100px'
  | '200px'
  | '400px'
  | '800px'
  | '25%'
  | '50%'
  | '75%'
  | '100%';
export type AnimationScaleValues = 0 | 20 | 40 | 60 | 80 | 100 | 120 | 140;
export type AnimationOpacityValues = 0 | 20 | 40 | 60 | 80 | 100;
export type AnimationRotateValues =
  | 0
  | 15
  | 30
  | 45
  | 60
  | 75
  | 90
  | 105
  | 120
  | 135
  | 150
  | 165
  | 180
  | 195
  | 210
  | 225
  | 240
  | 255
  | 270
  | 285
  | 300
  | 315
  | 330
  | 345
  | 360;
export type AnimationEaseValues =
  | 'linear'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | 'ease'
  | 'smooth'
  | 'snappy'
  | 'slow-rise'
  | 'fast-fall';

export type AnimationTransformValues = {
  translate?:
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'left-top'
    | 'right-top'
    | 'left-bottom'
    | 'right-bottom'
    | 'center';
  scale?:
    | 'x-0'
    | 'y-0'
    | 'x-25'
    | 'y-25'
    | 'x-50'
    | 'y-50'
    | 'x-75'
    | 'y-75'
    | '100'
    | 'x-125'
    | 'y-125';
  rotate?: AnimationRotateValues; // e.g., '45deg'
  opacity?: AnimationOpacityValues; // Allow setting starting opacity
};

export interface AnimationConfig {
  delay?: AnimationDelayValues;
  duration?: AnimationDurationValues;
  origin:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'center-left'
    | 'center-center'
    | 'center-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
  easing?: AnimationEaseValues;
  start?: AnimationTransformValues;
  end?: AnimationTransformValues;
}

export type AnimationProps =
  | AnimationConfig
  | { in: AnimationConfig; out?: AnimationConfig }
  | ScreenOptions<
      { in: AnimationConfig; out?: AnimationConfig } | AnimationConfig
    >;

import { Directions, DirectionsXY, ScreenSizes } from "./types/layout";

export const DIRECTIONS_XY: DirectionsXY[] = ["x", "y"];

export const DIRECTIONS: Directions[] = [
  ...DIRECTIONS_XY,
  "top",
  "right",
  "bottom",
  "left",
];

export const SCREEN_SIZES: ScreenSizes[] = [
  "mobile",
  "desktop",
  "large-desktop",
  "tablet",
];

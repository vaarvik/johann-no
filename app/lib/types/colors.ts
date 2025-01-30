export type DefaultColors = "foreground" | "background";

export type BrandColors = "primary";

export type NeutralColors = "foreground" | "background" | "grey";

export type StatusColors = "error" | "warning" | "success";

export type AllColors =
  | DefaultColors
  | BrandColors
  | StatusColors
  | NeutralColors;

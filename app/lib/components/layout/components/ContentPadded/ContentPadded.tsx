import { generateClassNamesByStringOrObject } from "@/services/utils/generateClassNamesByStringOrObject";
import { SpacingVariant } from "@/types/spacing";
import { ElementType, HTMLAttributes } from "react";
import styles from "./ContentPadded.module.scss";

export interface ContentPaddedProps
  extends Omit<HTMLAttributes<HTMLElement>, "className"> {
  as?: ElementType;
  padding?: SpacingVariant;
}

export default function ContentPadded({
  as: HTMLTag = "div",
  padding = "400",
  children,
  ...otherProps
}: ContentPaddedProps) {
  const classNames = generateClassNamesByStringOrObject(
    padding,
    styles,
    "content-padded--padding",
  );

  return (
    <HTMLTag className={classNames.join(" ")} {...otherProps}>
      {children}
    </HTMLTag>
  );
}

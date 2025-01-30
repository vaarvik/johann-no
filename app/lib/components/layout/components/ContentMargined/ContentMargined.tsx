import { generateClassNamesByStringOrObject } from "@/services/utils/generateClassNamesByStringOrObject";
import { SpacingVariant } from "@/types/spacing";
import { ElementType, HTMLAttributes } from "react";
import styles from "./ContentMargined.module.scss";

interface Props extends Omit<HTMLAttributes<HTMLElement>, "className"> {
  as?: ElementType;
  margin?: SpacingVariant;
}

export default function ContentMargined({
  as: HTMLTag = "div",
  margin = "400",
  children,
  ...otherProps
}: Props) {
  const classNames = generateClassNamesByStringOrObject(
    margin,
    styles,
    "content-margined--margin",
  );

  return (
    <HTMLTag className={classNames.join(" ")} {...otherProps}>
      {children}
    </HTMLTag>
  );
}

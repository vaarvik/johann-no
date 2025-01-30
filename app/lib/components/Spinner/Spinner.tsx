import { FontSize } from "@/types/text";
import styles from "./Spinner.module.scss";

import type { JSX } from "react";

interface Props {
  size?: FontSize;
}
export default function Spinner({ size = "md" }: Props): JSX.Element {
  return (
    <div
      className={`${styles.spinner} ${styles[`spinner--size-${size}`]}`}
    ></div>
  );
}

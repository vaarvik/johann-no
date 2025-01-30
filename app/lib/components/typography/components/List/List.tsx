import hasOnlyChildrenOfType from "@/services/utils/hasChildrenOfType";
import React from "react";
import ListItem from "./components/ListItem/ListItem";

export interface ListProps
  extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  ordered?: boolean;
}

export default function List({
  children,
  color,
  className,
  ordered,
  ...props
}: ListProps) {
  if (!hasOnlyChildrenOfType(children, ListItem)) {
    throw new Error(
      `All direct children of ${List.name} must be ${ListItem.name}.`,
    );
  }

  const HTMLTag = ordered ? "ol" : "ul";
  const classNames = [HTMLTag, className ?? ""];
  if (color) classNames.push(`${HTMLTag}--color-${color}`);

  return (
    <HTMLTag className={classNames.join(" ")} {...props}>
      {children}
    </HTMLTag>
  );
}

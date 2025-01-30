import classNames from '@/services/utils/classNames';
import hasOnlyChildrenOfType from '@/services/utils/hasChildrenOfType';
import React from 'react';
import ListItem from './components/ListItem/ListItem';

export interface ListProps
  extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  ordered?: boolean;
}

export default function List({
  children,
  color = 'currentcolor',
  className,
  ordered,
  ...props
}: ListProps) {
  if (!hasOnlyChildrenOfType(children, ListItem)) {
    throw new Error(
      `All direct children of ${List.name} must be ${ListItem.name}.`,
    );
  }

  const HTMLTag = ordered ? 'ol' : 'ul';

  return (
    <HTMLTag
      className={classNames(className, HTMLTag, `${HTMLTag}--color-${color}`)}
      {...props}
    >
      {children}
    </HTMLTag>
  );
}

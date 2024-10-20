import React from 'react';

interface ListProps
  extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  ordered?: boolean;
}

export const List: React.FC<ListProps> = ({
  children,
  ordered,
  className,
  ...props
}) => {
  const HTMLTag = ordered ? 'ol' : 'ul';
  const classNames = [HTMLTag, className ?? ''];

  return (
    <HTMLTag className={classNames.join(' ')} {...props}>
      {children}
    </HTMLTag>
  );
};

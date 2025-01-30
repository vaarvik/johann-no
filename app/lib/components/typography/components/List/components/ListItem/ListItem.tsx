import React from 'react';

export default function ListItem({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLLIElement>) {
  const classNames = ['li', className ?? ''];
  return (
    <li className={classNames.join(' ')} {...props}>
      {children}
    </li>
  );
}

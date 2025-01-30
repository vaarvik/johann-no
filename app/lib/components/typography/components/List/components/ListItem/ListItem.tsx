import classNames from '@/services/utils/classNames';
import React from 'react';

export default function ListItem({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li className={classNames(className, 'li')} {...props}>
      {children}
    </li>
  );
}

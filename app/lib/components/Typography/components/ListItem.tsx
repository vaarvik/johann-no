import React from 'react';

export const ListItem: React.FC<React.HTMLAttributes<HTMLLIElement>> = ({
  children,
  className,
  ...props
}) => {
  const classNames = ['li', className ?? ''];
  return (
    <li className={classNames.join(' ')} {...props}>
      {children}
    </li>
  );
};

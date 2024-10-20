import { DefaultIconProps } from '@/types/icons';
import React from 'react';
import Button, { ButtonProps } from '../Button/Button';
import styles from './IconButton.module.scss';

export interface IconButtonProps extends ButtonProps {
  icon: React.ReactElement<DefaultIconProps>;
}

export default function IconButton({
  icon,
  children,
  ...otherProps
}: IconButtonProps): JSX.Element {
  return (
    <Button {...otherProps}>
      <div className={styles['icon-button__content']}>
        {children}
        <span className={styles['icon-button__icon']}>{icon}</span>
      </div>
    </Button>
  );
}

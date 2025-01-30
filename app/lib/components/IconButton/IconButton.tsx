import { DefaultIconProps } from '@/types/icons';
import React from 'react';
import Button, { ButtonProps } from '../Button/Button';
import FlexItem from '../layout/components/FlexContainer/components/FlexItem/FlexItem';
import FlexContainer from '../layout/components/FlexContainer/FlexContainer';
import styles from './IconButton.module.scss';

export interface IconButtonProps extends ButtonProps {
  icon: React.ReactElement<DefaultIconProps>;
}

export default function IconButton({
  icon,
  children,
  isLoading,
  ...otherProps
}: IconButtonProps) {
  return (
    <Button {...otherProps} isLoading={isLoading}>
      {(children || (icon && !isLoading)) && (
        <FlexContainer gap="300" align="center" justify="space-between">
          {children && <FlexItem>{children}</FlexItem>}
          {!isLoading && (
            <FlexItem>
              <span className={styles['icon-button__icon']}>{icon}</span>
            </FlexItem>
          )}
        </FlexContainer>
      )}
    </Button>
  );
}

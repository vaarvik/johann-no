'use client';

import { MouseEvent, ReactNode, useEffect } from 'react';
import CrossIcon from '../icons/CrossIcon/CrossIcon';
import IconButton from '../IconButton/IconButton';
import styles from './Modal.module.scss';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  preventExit?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  preventExit,
}: Props) {
  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape' && !preventExit) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, preventExit]);

  if (!isOpen) return null;

  const stopPropagation = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className={styles.modal}
      onClick={!preventExit ? onClose : (): void => {}}
    >
      {!preventExit && (
        <div className={styles['modal__button']}>
          <IconButton icon={<CrossIcon />} color="foreground" />
        </div>
      )}
      <div className={styles['modal__content']} onClick={stopPropagation}>
        {children}
      </div>
    </div>
  );
}

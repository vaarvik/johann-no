import Modal from '@/components/Modal/Modal';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

interface UseModalReturn {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

const useModal = (preventExit: boolean = false): UseModalReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  const openModal = useCallback((modalContent: ReactNode) => {
    setContent(modalContent);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setContent(null);
  }, []);

  useEffect(() => {
    if (!isOpen || !content) return;

    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);

    root.render(
      <Modal isOpen={isOpen} onClose={closeModal} preventExit={preventExit}>
        {content}
      </Modal>,
    );

    return () => {
      setTimeout(() => {
        root.unmount();
        document.body.removeChild(container);
      }, 0); // Defer cleanup to the next tick
    };
  }, [isOpen, content, closeModal, preventExit]);

  return {
    openModal,
    closeModal,
  };
};

export default useModal;

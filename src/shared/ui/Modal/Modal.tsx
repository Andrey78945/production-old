/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactNode, useEffect, useState } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const { theme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const mods: Mods = {
    [cls.opened]: isOpen,
  };

  const onKeyEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (onClose) onClose();
    }
  };

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    window.addEventListener('keydown', (e: KeyboardEvent) => onKeyEscape(e));
    return () => window.removeEventListener('keydown', (e) => onKeyEscape(e));
  });

  if (lazy && !isMounted) {
    return null;
  }

  if (!isOpen) return null;
  return (
    <Portal>
      <div className={`modal ${classNames(cls.Modal, mods, [className, theme])}`}>
        <div className={cls.overlay} onClick={handleClose}>
          <div className={classNames(cls.content, { [cls.contentOpened]: isOpen })} onClick={handleClick}>
            <button type='button' onClick={onClose}>
              #
            </button>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

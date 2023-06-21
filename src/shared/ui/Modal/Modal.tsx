/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactNode, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;
  const mods: Record<string, boolean> = {
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

  if (!isOpen) return null;
  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={handleClose}>
          <div
            className={classNames(cls.content, { [cls.contentOpened]: isOpen })}
            onClick={handleClick}
          >
            <button type="button" onClick={onClose}>
              #
            </button>
            {children}
          </div>
        </div>
      </div>
    </Portal>

  );
};

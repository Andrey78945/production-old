import { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: string;
  size?: 'size_m' | 'size_l' | 'size_xl';
  disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className, children, theme, square, size, disabled, onClick, ...otherProps
  } = props;
  const disabledBtn = disabled ? cls.disabled : '';

  return (
    <button
      className={classNames(cls.Button, { }, [
        className,
        cls[theme],
        cls[square],
        cls[size],
        disabledBtn,
      ])}
      onClick={onClick}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
});

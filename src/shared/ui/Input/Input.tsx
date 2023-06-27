/* eslint-disable jsx-a11y/no-autofocus */
import { classNames } from 'shared/lib/classNames/classNames';

import {
  InputHTMLAttributes, memo, useEffect, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  autofocus?: boolean;
  label?: string;
}

export const Input = memo((props: InputProps) => {
  const {
    className, value, onChange, placeholder, autofocus, label, type = 'text', ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
    }
  }, [autofocus]);

  return (
    <div className={classNames(cls.Input, {}, [className])}>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        autoFocus={isFocused}
        {...otherProps}
      />
    </div>
  );
});

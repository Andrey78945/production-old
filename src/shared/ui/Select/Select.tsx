import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useCallback, useMemo } from 'react';
import cls from './Select.module.scss';

interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  readonly?: boolean;
  onChange?: (value: string) => void;
}

export const Select = memo(({ className, label, options, value, readonly, onChange }: SelectProps) => {
  const mods: Mods = {};

  const optionsList = useMemo(() => {
    if (options)
      return options?.map((opt) => (
        <option value={opt.value} className={cls.option} key={opt.value}>
          {opt.content}
        </option>
      ));
    return null;
  }, [options]);

  const handleOnCange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(event.target.value);
    },
    [onChange]
  );

  return (
    <div className={classNames(cls.Select, mods, [className])}>
      {label && (
        <label htmlFor='select' className={cls.label}>
          {label}
        </label>
      )}
      <select className={cls.select} id='select' value={value} onChange={handleOnCange} disabled={readonly}>
        {optionsList}
      </select>
    </div>
  );
});

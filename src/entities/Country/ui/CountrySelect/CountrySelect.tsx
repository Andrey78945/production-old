import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  readonly?: boolean;
  onChange?: (value: Country) => void;
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazahstan, content: Country.Kazahstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(({ className, value, onChange, readonly }: CountrySelectProps) => {
  const { t } = useTranslation();
  const handleOnChange = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );
  return (
    <ListBox
      onChange={handleOnChange}
      value={value}
      defaultValue={t('Страна')}
      label={t('Страна')}
      items={options}
      readonly={readonly}
      direction='top right'
    />
  );
});

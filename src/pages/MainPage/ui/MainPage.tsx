import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

function MainPage() {
  const { t } = useTranslation('main');
  const [value, setValue] = useState('');
  const onChange = (value: string) => {
    setValue(value);
  };
  return (
    <div>
      {t('Главная страница')}
      <BugButton />
      <Counter />
      <Input onChange={onChange} value={value} />
    </div>
  );
}

export default MainPage;

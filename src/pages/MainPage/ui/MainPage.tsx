/* eslint-disable i18next/no-literal-string */
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation('main');

  return (
    <div>
      {t('Главная страница')}
      <BugButton />
      <Counter />
    </div>
  );
}

export default MainPage;

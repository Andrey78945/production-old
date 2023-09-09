/* eslint-disable i18next/no-literal-string */
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

function MainPage() {
  const { t } = useTranslation('main');

  return (
    <Page>
      {t('Главная страница')}
      <BugButton />
      <Counter />
    </Page>
  );
}

export default MainPage;

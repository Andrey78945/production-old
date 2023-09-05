import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

export function ErrorPage() {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <section className={cls['error-page']}>
      <h1 className={cls['page-title']}>{t('Произошла непредвиденная ошибка')}</h1>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </section>
  );
}

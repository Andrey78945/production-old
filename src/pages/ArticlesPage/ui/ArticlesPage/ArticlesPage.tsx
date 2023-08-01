import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

function ArticlesPage(props: ArticlesPageProps) {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    <div className={classNames(cls.articlesPage, {}, [className])}>
      <h1>{t('Статьи')}</h1>
    </div>
  );
}

export default memo(ArticlesPage);

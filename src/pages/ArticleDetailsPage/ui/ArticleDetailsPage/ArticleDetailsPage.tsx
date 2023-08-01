import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

function ArticleDetailsPage(props: ArticleDetailsPageProps) {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    <div className={classNames(cls.articleDetailsPage, {}, [className])}>
      <h1>{t('Статья')}</h1>
    </div>
  );
}

export default memo(ArticleDetailsPage);

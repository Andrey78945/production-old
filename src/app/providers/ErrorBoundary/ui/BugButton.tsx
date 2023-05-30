import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
  className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  const handleErrorButton = () => setError((prev) => !prev);

  useEffect(() => {
    if (error) throw new Error('Error button');
    setError(false);
  }, [error]);

  return <Button onClick={handleErrorButton}>{t('Выбросить ошибку')}</Button>;
};

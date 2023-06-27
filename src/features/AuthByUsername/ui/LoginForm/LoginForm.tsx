import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        className={cls.input}
        type="text"
        placeholder={t('Введите имя')}
        autoFocus
        label={t('Имя')}
      />
      <Input
        className={cls.input}
        type="text"
        placeholder={t('Введите пароль')}
        label={t('Пароль')}
      />
      <Button>{t('Войти')}</Button>
    </div>
  );
};

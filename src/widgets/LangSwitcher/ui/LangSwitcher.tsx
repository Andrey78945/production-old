import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { memo } from 'react';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
    >
      {t(short ? 'Короткий язык' : 'Русский')}
    </Button>
  );
})

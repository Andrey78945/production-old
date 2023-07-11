import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  profileData?: Profile;
  isLoading?: boolean;
  error?: string;
}

export const ProfileCard = ({ className, profileData, isLoading, error }: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль пользователя')} />
        <Button theme={ThemeButton.OUTLINE}>{t('Редактировать')}</Button>
      </div>
      <div className={cls.data}>
        <Input className={cls.input} value={profileData?.firstname} placeholder={t('Ваше имя')} />
        <Input className={cls.input} value={profileData?.lastname} placeholder={t('Ваша фамилия')} />
      </div>
    </div>
  );
};

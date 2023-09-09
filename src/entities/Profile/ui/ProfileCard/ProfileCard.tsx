import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  profileData?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeLastname?: (value?: string) => void;
  onChangeFirstname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = ({
  className,
  profileData,
  isLoading,
  error,
  readonly,
  onChangeLastname,
  onChangeFirstname,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла непредвиденная ошибка')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {profileData?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={profileData?.avatar} />
          </div>
        )}

        <Input
          className={cls.input}
          value={profileData?.firstname}
          placeholder={t('Ваше имя')}
          label={t('Ваше имя')}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={profileData?.lastname}
          placeholder={t('Ваша фамилия')}
          label={t('Ваша фамилия')}
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={profileData?.age}
          placeholder={t('Ваш возраст')}
          label={t('Ваш возраст')}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={profileData?.city}
          placeholder={t('Ваш город')}
          label={t('Ваш город')}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={profileData?.username}
          placeholder={t('Ваш ник')}
          label={t('Ваш ник')}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={profileData?.avatar}
          placeholder={t('Ваш аватар')}
          label={t('Ваш аватар')}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          className={cls.input}
          value={profileData?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={profileData?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};

import {
  ProfileCard,
  ValidateProfileError,
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  profileReducer,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DynamicMModuleLoader, ReducerList } from 'shared/lib/components/DynamicMModuleLoader/DynamicMModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

function ProfilePage() {
  const { t } = useTranslation('profile');
  const reducers: ReducerList = {
    profile: profileReducer,
  };
  const dispatch = useAppDispatch();

  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslation = {
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректная страна'),
    [ValidateProfileError.INCORRECT_NAME_OR_SURNAME]: t('Некорректное имя или фамилия'),
    [ValidateProfileError.NO_DATA]: t('Нет данных'),
    [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
  };

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstname: value || '' }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (value?: Currency) => {
      dispatch(profileActions.updateProfile({ currency: value }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (value?: Country) => {
      dispatch(profileActions.updateProfile({ country: value }));
    },
    [dispatch]
  );

  return (
    <DynamicMModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        <ProfilePageHeader />
        {validateErrors.length > 0 &&
          validateErrors.map((error) => (
            <Text theme={TextTheme.ERROR} text={validateErrorTranslation[error]} key={error} />
          ))}
        <ProfileCard
          profileData={data}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicMModuleLoader>
  );
}

export default ProfilePage;

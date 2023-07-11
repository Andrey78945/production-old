import {
  ProfileCard,
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  profileReducer,
} from 'entities/Profile';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DynamicMModuleLoader, ReducerList } from 'shared/lib/components/DynamicMModuleLoader/DynamicMModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

function ProfilePage() {
  const { t } = useTranslation('profile');
  const reducers: ReducerList = {
    profile: profileReducer,
  };
  const dispatch = useAppDispatch();

  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicMModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        <ProfileCard profileData={data} isLoading={isLoading} error={error} />
      </div>
    </DynamicMModuleLoader>
  );
}

export default ProfilePage;

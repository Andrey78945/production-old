import { fetchProfileData, profileReducer } from 'entities/Profile';
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicMModuleLoader, ReducerList } from 'shared/lib/components/DynamicMModuleLoader/DynamicMModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

function ProfilePage() {
  const { t } = useTranslation('profile');
  const reducers: ReducerList = {
    profile: profileReducer,
  };
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicMModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        <ProfileCard />
      </div>
    </DynamicMModuleLoader>
  );
}

export default ProfilePage;

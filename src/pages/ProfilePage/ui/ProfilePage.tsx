import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { DynamicMModuleLoader, ReducerList } from 'shared/lib/components/DynamicMModuleLoader/DynamicMModuleLoader';


function ProfilePage() {
  const { t } = useTranslation('profile');
  const reducers: ReducerList = {
    profile: profileReducer,
  };
  return (
    <DynamicMModuleLoader reducers={reducers} removeAfterUnmount>

      <div>
        {t('Cтраница профиля')}

      </div>
    </DynamicMModuleLoader>

  )
};


export default ProfilePage;
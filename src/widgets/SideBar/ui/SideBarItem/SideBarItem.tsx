import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cls from './SideBarItem.module.scss';
import { SideBarItemType } from '../SideBar/model/items';

interface SideBarItemProps {
  item: SideBarItemType;
  collapsed: boolean;
}

export const SideBarItem = ({ item, collapsed }: SideBarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }
  return (
    <AppLink className={cls.item} to={item.path} theme={AppLinkTheme.SECONDARY}>
      <item.Icon className={cls.icon} />
      <span className={classNames(cls.link, { [cls.collapsed]: collapsed }, [])}>{t(`${item.text}`)}</span>
    </AppLink>
  );
};

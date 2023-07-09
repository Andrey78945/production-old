import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SideBarItem.module.scss';
import { SideBarItemType } from '../SideBar/model/items';

interface SideBarItemProps {
  item: SideBarItemType;
  collapsed: boolean;
}

export const SideBarItem = ({ item, collapsed }: SideBarItemProps) => {
  const { t } = useTranslation();
  return (
    <AppLink className={cls.item} to={item.path} theme={AppLinkTheme.SECONDARY}>
      <item.Icon className={cls.icon} />
      <span className={classNames(cls.link, { [cls.collapsed]: collapsed }, [])}>{t(`${item.text}`)}</span>
    </AppLink>
  );
};

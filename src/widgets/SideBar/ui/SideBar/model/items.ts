import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SideBarItemType {
  path: string;
  text: string;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  authOnly?: boolean;
}

export const SideBarItemsList: SideBarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Главная страница',
    Icon: HomeIcon,
  },
  {
    path: RoutePath.about,
    text: 'О сайте',
    Icon: AboutIcon,
  },
  {
    path: RoutePath.profile,
    text: 'Личный кабинет',
    Icon: ProfileIcon,
    authOnly: true,
  },
];

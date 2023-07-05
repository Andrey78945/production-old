import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, ReactNode, memo } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
  const { className, to, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;
  return (
    <Link className={classNames(cls.AppLink, {}, [className, cls[theme]])} to={to} {...otherProps}>
      {children}
    </Link>
  );
});

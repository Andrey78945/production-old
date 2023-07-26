import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
}

export const Avatar = ({ className, src, size }: AvatarProps) => {
  const { t } = useTranslation();
  const styles = useMemo<CSSProperties>(() => ({ width: `${size}px`, height: `${size}px` }), [size]);
  return <img className={classNames(cls.Avatar, {}, [className])} src={src} alt={t('Аватар')} style={styles} />;
};

// "avatar": "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663671765_4-mykaleidoscope-ru-p-zloi-khaker-vkontakte-4.jpg"

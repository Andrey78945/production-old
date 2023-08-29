import { classNames } from 'shared/lib/classNames/classNames';
import { memo, MutableRefObject, ReactNode, useRef, UIEvent } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import { useThrottle } from 'shared/lib/hooks/useThrottle';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getScrollRestoreByPath, scrollRestoreActions } from 'features/ScrollRestore';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getScrollRestoreByPath(state, pathname));

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollRestoreActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname,
      })
    );
  }, 500);

  return (
    <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])} onScroll={onScroll}>
      {children}
      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
    </section>
  );
});

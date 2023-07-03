import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer;
}

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicMModuleLoaderProps {
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
}

export const DynamicMModuleLoader: FC<DynamicMModuleLoaderProps> =
(props: PropsWithChildren<DynamicMModuleLoaderProps>) => {
  const { children, reducers, removeAfterUnmount } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer);

      dispatch({ type: `@INIT ${name} reducer` });
    });


    return () => {
      if (removeAfterUnmount) {
        Object.keys(reducers).forEach((name: StateSchemaKey) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (<>{ children }</>);
}


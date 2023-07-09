import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/LoginSlice';
import { ReducerList } from 'shared/lib/components/DynamicMModuleLoader/DynamicMModuleLoader';

const defaultAsyncReducers: ReducerList = {
  login: loginReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) => (StoryComponent: StoryFn) =>
    (
      <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
      </StoreProvider>
    );

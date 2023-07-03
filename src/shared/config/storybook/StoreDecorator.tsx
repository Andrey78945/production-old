import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/LoginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  login: loginReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) =>
    (StoryComponent: StoryFn) =>
      (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
          <StoryComponent />
        </StoreProvider>
      );

import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todos/todo.slice';
import { createLogger } from 'redux-logger';
import { isDevMode } from '@/app/utils/commons';

const logger = createLogger({
  collapsed: true
});

const devMode = isDevMode();

export const makeStore = () => {
  return configureStore({
    reducer: {
      todo: todoSlice
    },
    middleware: (getDefaultMiddleware) => {
      if (devMode) {
        return getDefaultMiddleware().concat(logger);
      }
      return getDefaultMiddleware();
    },
    devTools: true
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// eslint-disable-next-line import/named
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
// eslint-disable-next-line import/named
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';

import { ActionType } from '../feachers/types/types';

import { postReducer } from './reducer/post-reducer';

export const rootReducer = combineReducers({
  post: postReducer,
});

//11
export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>;

export const useAppDispatch = (): AppThunk => useDispatch<AppThunk>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
export type AppThunk = ThunkDispatch<AppRootStateType, unknown, ActionType>;

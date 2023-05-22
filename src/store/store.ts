import {applyMiddleware, combineReducers, createStore, legacy_createStore} from "redux";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ActionType, postReducer} from "./post-reducer";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk';



export const rootReducer= combineReducers({
    post: postReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType= ReturnType<typeof rootReducer>

export const useAppDispatch = () => useDispatch<AppThunk>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type AppThunk = ThunkDispatch<AppRootStateType, unknown, ActionType>

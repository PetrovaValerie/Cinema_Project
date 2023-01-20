import {applyMiddleware, combineReducers, createStore} from 'redux';
import {TypedUseSelectorHook, useSelector} from "react-redux";
import createSagaMiddleware from 'redux-saga';
import {all} from "redux-saga/effects";
import {signUpSaga} from "./sagaUserRegistry/signUpSaga";
import { signInSaga } from './sagaUserRegistry/signInSaga';
import {themeReducer} from "./themeReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {authReducer, AuthStateType} from "./authReducer/authReducer";
import { ThemeReducerType } from './types';

export const useThemeSelector: TypedUseSelectorHook<ThemeReducerType> = useSelector;
export const useUserSelector: TypedUseSelectorHook<AuthStateType> = useSelector

export const reducer = combineReducers({
    themeReducer,
    authReducer
})

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
))

function* rootSaga() {
    yield all(
        [
            signUpSaga(),
            signInSaga(),
        ]
    )
}


sagaMiddleware.run(rootSaga)
import {ILogin} from "../../models/login";
import {IError} from "../../models/error";

export enum LoginActionTypes {
    LOGIN_LOADING = "LOGIN_LOADING",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAIL = "LOGIN_FAIL"
}

interface ILoginLoading {
    type: LoginActionTypes.LOGIN_LOADING
}

interface ILoginSuccess {
    type: LoginActionTypes.LOGIN_SUCCESS,
    payload: ILogin
}

interface ILoginFail {
    type: LoginActionTypes.LOGIN_FAIL,
    payload: {error: IError}
}

export type LoginAction = ILoginLoading | ILoginFail | ILoginSuccess;

import {Dispatch} from "redux";
import {Api} from "../../services/api";
import {LoginAction, LoginActionTypes} from "../actionTypes/login.actionTypes";
import {ILogin} from "../../models/login";

export const loginAction = (email: string, password: string) =>
    async (dispatch: Dispatch<LoginAction>) => {
    let api = new Api();

    try {
        dispatch({
            type: LoginActionTypes.LOGIN_LOADING
        });

        await api.post<ILogin>("/auth", {email, password})
            .then(r => {

                console.log("dados de retorno")
                console.log(r.data)

                if (r.status === 200) {
                    dispatch({
                        type: LoginActionTypes.LOGIN_SUCCESS,
                        payload: r.data
                    })
                }
            })
            .catch(e => {
               dispatch({
                   type: LoginActionTypes.LOGIN_FAIL,
                   payload: e
               })
            });
    }catch (e: any) {
        dispatch({
            type: LoginActionTypes.LOGIN_FAIL,
            payload: e
        })
    }
    }

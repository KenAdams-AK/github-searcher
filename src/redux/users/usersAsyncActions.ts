import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { Dispatch } from "redux"
import { RequestParamsType } from "../../components/UsersList/usersList.data.type"
import { ResponseType, UsersActionsType} from "./users.data.types"
import { getUsersFailure, getUsersRequest, getUsersSuccess } from "./usersActions"

let CancelToken = axios.CancelToken
let cancel: any;

export const getUsersAsyncAction = (requestParams:RequestParamsType) => {	
	return (dispatch: Dispatch<UsersActionsType>) => {
		dispatch(getUsersRequest())

		const options: AxiosRequestConfig = {
			method: 'get',
			url: `https://api.github.com/search/users?`,
			cancelToken: new CancelToken(c => cancel = c),
			params: requestParams
		}

		axios(options)
			.then((response: AxiosResponse<ResponseType>) => dispatch(getUsersSuccess(response.data)))
			.catch((error: AxiosError<string>) => {
				if (axios.isCancel(error)) return
				dispatch(getUsersFailure(error.message))
			}
		)
	}
}

export const requestCancel = () => {
	return () => {
		if (cancel !== undefined) cancel()
	}
}
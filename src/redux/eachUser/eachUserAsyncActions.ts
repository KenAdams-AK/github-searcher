import { getEachUserRequest, getEachUserSuccess, getEachUserFailure } from './eachUserActions';
import { Dispatch } from "redux"
import { EachUserActionsType, EachUserType } from "./eachUser.data.types"
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const getEachUserAsyncAction = (requestParams: string) => {
	return (dispatch: Dispatch<EachUserActionsType>) => {
		dispatch(getEachUserRequest())

		const options: AxiosRequestConfig = {
			method: 'get',
			url: requestParams
		}
		axios(options)
			.then((response: AxiosResponse<EachUserType>) => dispatch(getEachUserSuccess(response.data)))
			.catch((error: AxiosError<string>) => dispatch(getEachUserFailure(error.message))
		)
	}
}
import axios, { AxiosError } from 'axios';
import { AxiosResponse } from 'axios';
import { AxiosRequestConfig } from 'axios';
import { getReposRequest, getReposSuccess, getReposFailure } from './eachUserReposActions';
import { ReposActionsType, ReposType } from './eachUserRepos.data.types';
import { Dispatch } from "redux"
import { ReposRequestParamsType } from '../../components/Repos/repos.data.type';

export const getReposAsyncAction = (requestParams: ReposRequestParamsType) => {
	return (dispatch: Dispatch<ReposActionsType>) => {
		dispatch(getReposRequest())

		const options: AxiosRequestConfig = {
			method: 'get',
			url: `${requestParams.url}?`,
			params: requestParams.params,
		}
		axios(options)
			.then((response: AxiosResponse<ReposType[]>) => dispatch(getReposSuccess(response.data)))
			.catch((error: AxiosError<string>) => dispatch(getReposFailure(error.message))
		)
	}
}
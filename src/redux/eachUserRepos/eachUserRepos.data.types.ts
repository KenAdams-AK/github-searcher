import { ReposTypes } from './eachUserReposTypes';

export type ReposType = {
	id: number,
	name: string,
	stargazers_count: number,
	forks_count: number
}

export type ReposStateType = {
	isReposLoading: boolean,
	getReposError: string | null,
	reposList: ReposType[]
}

interface IGetReposRequest {
	type: ReposTypes.GET_REPOS_REQUEST,
}
interface IGetReposSuccess {
	type: ReposTypes.GET_REPOS_SUCCESS,
	payload: ReposType[],
}
interface IGetReposFailure {
	type: ReposTypes.GET_REPOS_FAILURE,
	payload: string
}
interface IClearReposList {
	type: ReposTypes.CLEAR_REPOS_LIST,
}

export type ReposActionsType = IGetReposRequest | IGetReposSuccess | IGetReposFailure | IClearReposList
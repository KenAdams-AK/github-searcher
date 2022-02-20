import { EachUserTypes } from './eachUserTypes';

export type EachUserType = {
	id: number,
	avatar_url: string,
	name: string,
	public_repos: number,
	email: string | null,
	location: string,
	created_at: string,
	followers: number,
	following: number,
	bio: string | null,
	repos_url: string,
}

export type EachUserStateType = {
	isEachUserLoading: boolean,
	listWithEachUserData: EachUserType[],
	getEachUserError: string | null,
}

interface IGetEachUserRequest {
	type: EachUserTypes.GET_EACH_USER_REQUEST,
}
interface IGetEachUserSuccess {
	type:EachUserTypes.GET_EACH_USER_SUCCESS,
	payload: EachUserType,
}
interface IGetEachUserFailure {
	type: EachUserTypes.GET_EACH_USER_FAILURE,
	payload: string
}
interface IClearEachUserList {
	type: EachUserTypes.CLEAR_EACH_USER_LIST
}

export type EachUserActionsType = IGetEachUserRequest | IGetEachUserSuccess | IGetEachUserFailure | IClearEachUserList
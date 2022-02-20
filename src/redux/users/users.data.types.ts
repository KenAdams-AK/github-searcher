import { UsersTypes } from "./usersTypes";

export type UserType = {
	url: string,
	id: number,
}

export type ResponseType = {
	total_count: number | null,
	items: UserType[],
}

export type UsersStateType = {
	isLoading: boolean,
	responseData: ResponseType,
	usersList: UserType[],
	isSuccess: boolean,
	getUsersError: string | null,
}

interface IGetUsersRequest {
	type:UsersTypes.GET_USERS_REQUEST,
}
interface IGetUsersSuccess {
	type:UsersTypes.GET_USERS_SUCCESS,
	payload: ResponseType
}
interface IGetUsersFailure {
	type: UsersTypes.GET_USERS_FAILURE,
	payload: string
}

export type UsersActionsType = IGetUsersRequest | IGetUsersSuccess | IGetUsersFailure
import { ResponseType, UsersActionsType } from "./users.data.types";
import { UsersTypes } from "./usersTypes";

export const getUsersRequest = (): UsersActionsType => ({
	type: UsersTypes.GET_USERS_REQUEST,
})
export const getUsersSuccess = (response: ResponseType): UsersActionsType => ({
	type: UsersTypes.GET_USERS_SUCCESS,
	payload: response
})
export const getUsersFailure = (error: string): UsersActionsType => ({
	type: UsersTypes.GET_USERS_FAILURE,
	payload: error
})
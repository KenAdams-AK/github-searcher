import { EachUserActionsType, EachUserType } from "./eachUser.data.types"
import { EachUserTypes } from "./eachUserTypes"

export const getEachUserRequest = (): EachUserActionsType => ({
	type: EachUserTypes.GET_EACH_USER_REQUEST,
})
export const getEachUserSuccess = (response: EachUserType): EachUserActionsType => ({
	type: EachUserTypes.GET_EACH_USER_SUCCESS,
	payload: response
})
export const getEachUserFailure = (error: string): EachUserActionsType => ({
	type: EachUserTypes.GET_EACH_USER_FAILURE,
	payload: error
})
export const clearEachUserList = (): EachUserActionsType => ({
	type: EachUserTypes.CLEAR_EACH_USER_LIST
})
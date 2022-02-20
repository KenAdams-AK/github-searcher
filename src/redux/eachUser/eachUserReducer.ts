import { EachUserActionsType, EachUserStateType } from "./eachUser.data.types"
import { EachUserTypes } from "./eachUserTypes"

const initialState: EachUserStateType = {
	isEachUserLoading: false,
	listWithEachUserData: [],
	getEachUserError: null,
}

export const eachUserReducer = (state = initialState, action: EachUserActionsType) => {
	switch (action.type) {
		case EachUserTypes.GET_EACH_USER_REQUEST:
			return {
				...state,
				isEachUserLoading: true,
				getUsersError: null,
			}
		case EachUserTypes.GET_EACH_USER_SUCCESS:
			return {
				...state,
				isEachUserLoading: false,
				getUsersError: null,
				listWithEachUserData: [...state.listWithEachUserData, action.payload]
			}
		case EachUserTypes.GET_EACH_USER_FAILURE:
			return {
				...state,
				isEachUserLoading: false,
				getEachUserError: action.payload
			}
		case EachUserTypes.CLEAR_EACH_USER_LIST: {
			return {
				...state,
				listWithEachUserData: [],
			}
		}
			
		default:
			return state;
	}
}
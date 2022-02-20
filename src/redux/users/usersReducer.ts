import { UsersActionsType, UsersStateType } from "./users.data.types";
import { UsersTypes } from "./usersTypes";

const initialState: UsersStateType = {
	isLoading: false,
	responseData: {
		total_count: null,
		items: []
	},
	usersList: [],
	isSuccess: false,
	getUsersError: null
}

export const usersReducer = (state = initialState, action: UsersActionsType) => {
	switch (action.type) {
		case UsersTypes.GET_USERS_REQUEST:
			return {
				...state,
				isLoading: true,
				getUsersError: null,
				isSuccess: false,
			}
		case UsersTypes.GET_USERS_SUCCESS:
			return {
				...state,
				isLoading: false,
				getUsersError: null,
				responseData: action.payload,
				usersList: action.payload.items,
				isSuccess: true,
			}
		case UsersTypes.GET_USERS_FAILURE:
			return {
				...state,
				isLoading: false,
				getUsersError: action.payload,
				isSuccess: false,
			}
			
		default:
			return state;
	}
}
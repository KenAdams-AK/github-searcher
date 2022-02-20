import { ReposActionsType, ReposStateType } from './eachUserRepos.data.types';
import { ReposTypes } from './eachUserReposTypes';

const initialState: ReposStateType = {
	isReposLoading: false,
	reposList: [],
	getReposError: null,
}

export const reposReducer = (state = initialState, action: ReposActionsType) => {
	switch (action.type) {
		case ReposTypes.GET_REPOS_REQUEST:
			return {
				...state,
				isReposLoading: true,
				getReposError: null,
			}
		case ReposTypes.GET_REPOS_SUCCESS:
			return {
				...state,
				isReposLoading: false,
				getReposError: null,
				reposList: action.payload
			}
		case ReposTypes.GET_REPOS_FAILURE:
			return {
				...state,
				isReposLoading: false,
				getReposError: action.payload
			}
		case ReposTypes.CLEAR_REPOS_LIST:
			return {
				...state,
				reposList: [],
			}
			
		default:
			return state;
	}
}
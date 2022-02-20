export type ReposPropsType = {
	reposUrl: string,
	reposAmount?: number,
}

export type ReposRequestParamsType = {
	url: string
	params: {
		page: number,
		per_page: number
	}
}
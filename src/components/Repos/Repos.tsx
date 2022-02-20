import React, { FC, useEffect, useState } from "react";
import { ReposType } from "../../redux/eachUserRepos/eachUserRepos.data.types";
import { getReposAsyncAction } from "../../redux/eachUserRepos/eachUserReposAsyncActions";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import { ReposPropsType, ReposRequestParamsType } from "./repos.data.type";
import "./Repos.scss";

const Repos: FC<ReposPropsType> = ({ reposUrl }) => {
	const dispatch = useAppDispatch();
	const { isReposLoading, reposList, getReposError } = useAppSelector(
		(state) => state.reposList
	);

	const [pageNumber, setPageNumber] = useState<number>(1);
	const [perPage, setPerPage] = useState<number>(10);

	const [query, setQuery] = useState<string | null>(null);
	const [filteredReposList, setFilteredReposList] =
		useState<ReposType[]>(reposList);
	const [isNotFound, setIsNotFound] = useState<boolean>(false);

	useEffect(() => {
		const requestParams: ReposRequestParamsType = {
			url: reposUrl,
			params: {
				page: pageNumber,
				per_page: perPage,
			},
		};
		reposUrl && dispatch(getReposAsyncAction(requestParams));
	}, [reposUrl]);

	useEffect(() => {
		reposList.length && setFilteredReposList(reposList);
	}, [reposList]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		setFilteredReposList(
			reposList.filter((repo) =>
				repo.name.toLowerCase().includes(e.target.value.toLowerCase())
			)
		);
	};

	useEffect(() => {
		if (query && !filteredReposList.length) {
			setIsNotFound(true);
		} else setIsNotFound(false);
	}, [query, filteredReposList]);

	return (
		<div className="Repos">
			<SearchBar
				placeholder="Search for User's Repositories..."
				handleChange={handleChange}
			/>
			<ul className="Repos__list">
				{isReposLoading ? (
					<Loader />
				) : getReposError ? (
					<div className="Repos__error">{getReposError}</div>
				) : (
					filteredReposList.map((repo) => (
						<li key={repo.id} className="Repos__item">
							<div className="Repos__name">{repo.name}</div>
							<div className="Repos__info">
								<p>{repo.forks_count} Forks</p>
								<p>{repo.stargazers_count} Stars</p>
							</div>
						</li>
					))
				)}
				{isNotFound && <div className="Repos__not-found">Not found...</div>}
			</ul>
		</div>
	);
};

export default Repos;

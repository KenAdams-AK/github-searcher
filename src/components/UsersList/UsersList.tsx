import React, { FC, useEffect, useMemo, useState } from "react";
import { RequestParamsType } from "./usersList.data.type";
import "./UsersList.scss";
import Loader from "../Loader/Loader";
import SingleUser from "../SingleUser/SingleUser";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import {
	requestCancel,
	getUsersAsyncAction,
} from "../../redux/users/usersAsyncActions";
import debounce from "lodash.debounce";
import { getEachUserAsyncAction } from "../../redux/eachUser/eachUserAsyncActions";
import { EachUserType } from "../../redux/eachUser/eachUser.data.types";
import SearchBar from "../SearchBar/SearchBar";
import { clearEachUserList } from "../../redux/eachUser/eachUserActions";
import { clearReposList } from "../../redux/eachUserRepos/eachUserReposActions";

const UsersList: FC = () => {
	const dispatch = useAppDispatch();
	const { isLoading, getUsersError, usersList, isSuccess } = useAppSelector(
		(state) => state.usersList
	);
	const { isEachUserLoading, getEachUserError, listWithEachUserData } =
		useAppSelector((state) => state.listWithEachUserData);

	const [isNotFound, setIsNotFound] = useState<boolean>(false);

	const [query, setQuery] = useState<string | null>(null);
	const [pageNumber, setPageNumber] = useState<number>(1);
	const [perPage, setPerPage] = useState<number>(10);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const debounceResults = useMemo(() => {
		return debounce(handleChange, 800);
	}, []);

	useEffect(() => {
		listWithEachUserData.length && dispatch(clearReposList());
		return () => debounceResults.cancel();
	}, []);

	useEffect(() => {
		const requestParams: RequestParamsType = {
			q: query,
			page: pageNumber,
			per_page: perPage,
		};
		if (query) {
			dispatch(clearEachUserList());
			dispatch(getUsersAsyncAction(requestParams));
		}

		return () => dispatch(requestCancel());
	}, [query]);

	useEffect(() => {
		if (isSuccess && !usersList.length) {
			setIsNotFound(true);
		} else setIsNotFound(false);
	}, [isSuccess, usersList]);

	useEffect(() => {
		let requestTimeout: any;
		if (usersList.length && query && isSuccess) {
			let i = 0;
			const delayEachUserRequest = () => {
				requestTimeout = setTimeout(() => {
					dispatch(getEachUserAsyncAction(usersList[i]?.url));
					i++;
					if (i < usersList.length) {
						delayEachUserRequest();
					}
				}, 400);
			};
			delayEachUserRequest();
		}

		return () => clearTimeout(requestTimeout);
	}, [usersList, query, isSuccess]);

	return (
		<main className="main">
			<SearchBar
				placeholder="Search for Users..."
				handleChange={debounceResults}
			/>
			<div className="UsersList__container">
				<ul className="UsersList__list">
					{listWithEachUserData.map((user: EachUserType) => (
						<li key={user?.id} className="UsersList__item">
							{getEachUserError ? (
								<div className="UsersList__item-error">{getEachUserError}</div>
							) : (
								<SingleUser eachUserData={user} />
							)}
						</li>
					))}
					{isEachUserLoading && <Loader />}
				</ul>
			</div>
			{isLoading && <Loader />}
			{isNotFound && <div className="UsersList__not-found">Not found...</div>}
			{(getUsersError || getEachUserError) && (
				<div className="UsersList__error">
					{getUsersError || getEachUserError}
				</div>
			)}
		</main>
	);
};

export default UsersList;

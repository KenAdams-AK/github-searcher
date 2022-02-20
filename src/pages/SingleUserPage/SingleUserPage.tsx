import moment from "moment";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EachUserType } from "../../redux/eachUser/eachUser.data.types";
import { useAppSelector } from "../../utils/hooks";
import "./SingleUserPage.scss";
import Repos from "../../components/Repos/Repos";

const SingleUserPage: FC = () => {
	const { userId } = useParams();
	const { listWithEachUserData } = useAppSelector(
		(state) => state.listWithEachUserData
	);

	const [currentUser, setCurrentUser] = useState<EachUserType>(
		{} as EachUserType
	);

	useEffect(() => {
		const getCurrentUser = listWithEachUserData.filter(
			(user) => user?.id === +userId!
		);
		setCurrentUser(getCurrentUser[0]);
	}, [userId]);

	return (
		<div className="SingleUserPage">
			<div className="SingleUserPage__info-container">
				<div className="SingleUserPage__img-container">
					<img src={currentUser?.avatar_url} alt="avatar" />
				</div>
				<div className="SingleUserPage__main-info">
					<h3>{currentUser?.name}</h3>
					<p>{currentUser?.email}</p>
					<p>{currentUser?.location}</p>
					<p>
						Join Date: {moment(currentUser?.created_at).format("MMM Do YYYY")}
					</p>
					<p>{currentUser?.followers} Followers</p>
					<p>Following {currentUser?.following}</p>
				</div>
			</div>
			<div className="SingleUserPage__bio">{currentUser?.bio}</div>
			<Repos reposUrl={currentUser?.repos_url} />
		</div>
	);
};

export default SingleUserPage;

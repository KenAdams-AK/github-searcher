import React from "react";
import { Link } from "react-router-dom";
import { EachUserPropsType } from "./singleUser.data.type";
import "./SingleUser.scss";

const SingleUser: React.FC<EachUserPropsType> = ({ eachUserData }) => {
	return (
		<Link to={`/user/${eachUserData?.id}`} className="SingleUser__link">
			<div className="SingleUser__container">
				<div className="SingleUser__image-container">
					<img src={eachUserData?.avatar_url} alt="avatar" />
				</div>
				<div className="SingleUser__username">{eachUserData?.name}</div>
				<div className="SingleUser__repos">
					Repo: {eachUserData?.public_repos}
				</div>
			</div>
		</Link>
	);
};

export default SingleUser;

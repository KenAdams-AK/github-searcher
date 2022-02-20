import { FC, useEffect, useRef } from "react";
import "./SearchBar.scss";
import { SearchBarPropsType } from "./searchBar.data.type";

const SearchBar: FC<SearchBarPropsType> = ({ handleChange, placeholder }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	return (
		<div className="SearchBar">
			<input
				type="text"
				placeholder={placeholder}
				onChange={handleChange}
				ref={inputRef}
			/>
		</div>
	);
};

export default SearchBar;

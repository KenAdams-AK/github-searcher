import React, { FC, JSXElementConstructor } from "react";
import { JsxChild } from "typescript";
import "./Loader.scss";

const Loader = () => {
	return (
		<div className="lds-facebook">
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Loader;

import { FC } from "react";
import Header from "./components/Header/Header";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SingleUserPage from "./pages/SingleUserPage/SingleUserPage";

const App: FC = () => {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/user/:userId" element={<SingleUserPage />} />
			</Routes>
		</div>
	);
};

export default App;

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Planet from "./components/Planet/Planet";

function App() {
	useEffect(() => {
		document.title = "Planet Fact Site";
	}, []);
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="/:id" element={<Planet />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;

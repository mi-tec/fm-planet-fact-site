import { Route, Routes } from "react-router-dom";

import "./App.scss";

import Planet from "./components/Planet/Planet";

import Header from "./components/Header/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/:id" element={<Planet />} />
			</Routes>
		</div>
	);
}

export default App;

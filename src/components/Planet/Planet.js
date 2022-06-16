import React from "react";
import { useParams } from "react-router-dom";

import Tabs from "../Tabs/Tabs";
import Stats from "../Stats/Stats";

import "./Planet.scss";

function Planet() {
	const { id } = useParams();

	return (
		<section className="planet">
			<Tabs id={id} />
			<Stats id={id} />
		</section>
	);
}

export default Planet;

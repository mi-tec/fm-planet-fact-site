import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Tabs from "../Tabs/Tabs";
import Stats from "../Stats/Stats";

import "./Planet.scss";

function Planet() {
	const { id } = useParams();

	useEffect(() => {
		document.title =
			"Planet Fact Site - " +
			id[0].toUpperCase() +
			id.slice(1).toLowerCase();
	}, [id]);

	return (
		<>
			<section className="planet">
				<Tabs id={id} />
			</section>
			<section className="stats">
				<Stats id={id} />
			</section>
		</>
	);
}

export default Planet;

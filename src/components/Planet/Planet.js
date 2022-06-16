import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import localJson from "../data/data.json";

import Tabs from "../Tabs/Tabs";

import "./Planet.scss";

function Planet() {
	const [Data, setData] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const found = localJson.find(
			(obj) =>
				obj.name === id[0].toUpperCase() + id.slice(1).toLowerCase()
		);
		setData(found);
	}, [id]);

	return (
		<section className="planet">
			<Tabs data={Data.name} id={id} />
		</section>
	);
}

export default Planet;

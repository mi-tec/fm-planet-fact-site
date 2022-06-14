import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import localJson from "../data/data.json";

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
		<img src={require(`../../images/planet-${id}.svg`)} alt={Data.name} />
	);
}

export default Planet;

import React, { useEffect, useState } from "react";

import localJson from "../data/data.json";

import "./Stats.scss";

function Stats(props) {
	const [Data, setData] = useState([]);

	useEffect(() => {
		const found = localJson.find(
			(obj) =>
				obj.name ===
				props.id[0].toUpperCase() + props.id.slice(1).toLowerCase()
		);
		setData(found);
	}, [props.id]);

	return (
		<div className="stats__component">
			<ul className="stats__component--list">
				<li className="stats__component--list-item">
					<span className="title">Rotation Time</span>
					<span className="data">{Data.rotation}</span>
				</li>
				<li className="stats__component--list-item">
					<span className="title">Revolution Time</span>
					<span className="data">{Data.revolution}</span>
				</li>
				<li className="stats__component--list-item">
					<span className="title">Radius</span>
					<span className="data">{Data.radius}</span>
				</li>
				<li className="stats__component--list-item">
					<span className="title">Average Temp.</span>
					<span className="data">{Data.temperature}</span>
				</li>
			</ul>
		</div>
	);
}

export default Stats;

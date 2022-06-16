import React, { useEffect, useState } from "react";

import localJson from "../data/data.json";

import icon_source from "../../images/icon-source.svg";

function Tabs(props) {
	const [Data, setData] = useState([]);
	const [overview, setOverView] = useState([]);
	const [structure, setStructure] = useState([]);
	const [surface, setSerface] = useState([]);

	const data_tabs = document.querySelectorAll(".planet__tabs-tab");
	const data_values = document.querySelectorAll(
		".planet__tabs-content--content"
	);

	const changeTab = (event) => {
		const data_tab = event.target.dataset.tab;
		const data_value = document.querySelector(`[data-value="${data_tab}"]`);
		for (let i = 0; i < data_values.length; i++) {
			const data_value_element = data_values[i];
			data_value_element.classList.remove("active");
		}
		data_value.classList.add("active");

		for (let y = 0; y < data_tabs.length; y++) {
			const data_tab_element = data_tabs[y];
			data_tab_element.classList.remove(`planet__tabs-tab--${props.id}`);
		}
		event.target.classList.add(`planet__tabs-tab--${props.id}`);
	};

	useEffect(() => {
		const found = localJson.find(
			(obj) =>
				obj.name ===
				props.id[0].toUpperCase() + props.id.slice(1).toLowerCase()
		);
		setData(found);
		setOverView(found.overview);
		setStructure(found.structure);
		setSerface(found.geology);
	}, [props.id, Data, overview, structure]);

	return (
		<>
			<div className="planet__tabs">
				<span
					className={`planet__tabs-tab planet__tabs-tab--${props.id}`}
					data-tab="overview"
					onClick={changeTab}
				>
					Overview
				</span>
				<span
					className="planet__tabs-tab"
					data-tab="structure"
					onClick={changeTab}
				>
					Structure
				</span>
				<span
					className="planet__tabs-tab"
					data-tab="surface"
					onClick={changeTab}
				>
					Surface
				</span>
			</div>
			<div className="divider"></div>
			<div className="planet__tabs-content">
				<div
					className="planet__tabs-content--content active"
					data-value="overview"
				>
					<div className="planet__image">
						<img
							className={`planet__image-${props.id}`}
							src={require(`../../images/planet-${props.id}.svg`)}
							alt={`${props.id}`}
						/>
					</div>
					<h1 className="planet__heading">{`${Data.name}`}</h1>
					<p className="planet__description">{`${overview.content}`}</p>
					<div className="planet__link">
						<span className="planet__link--source">Source : </span>
						<a
							className="planet__link--link"
							href={`${overview.source}`}
						>
							Wikipedia
						</a>
						<span className="planet__link--icon">
							<img src={icon_source} alt="Wikipedia" />
						</span>
					</div>
				</div>
				<div
					className="planet__tabs-content--content"
					data-value="structure"
				>
					<div className="planet__image">
						<img
							className={`planet__image-${props.id}--structure`}
							src={require(`../../images/planet-${props.id}-internal.svg`)}
							alt={`${props.id}`}
						/>
					</div>
					<h1 className="planet__heading">{`${Data.name}`}</h1>
					<p className="planet__description">{`${structure.content}`}</p>
					<div className="planet__link">
						<span className="planet__link--source">Source : </span>
						<a
							className="planet__link--link"
							href={`${structure.source}`}
						>
							Wikipedia
						</a>
						<span className="planet__link--icon">
							<img src={icon_source} alt="Wikipedia" />
						</span>
					</div>
				</div>
				<div
					className="planet__tabs-content--content"
					data-value="surface"
				>
					<div className="planet__image">
						<img
							className={`planet__image-${props.id}`}
							src={require(`../../images/planet-${props.id}.svg`)}
							alt={`${props.id}`}
						/>
					</div>
					<h1 className="planet__heading">{`${Data.name}`}</h1>
					<p className="planet__description">{`${surface.content}`}</p>
					<div className="planet__link">
						<span className="planet__link--source">Source : </span>
						<a
							className="planet__link--link"
							href={`${surface.source}`}
						>
							Wikipedia
						</a>
						<span className="planet__link--icon">
							<img src={icon_source} alt="Wikipedia" />
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default Tabs;

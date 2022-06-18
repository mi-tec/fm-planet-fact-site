import React, { useEffect, useState } from "react";

import localJson from "../data/data.json";

import icon_source from "../../images/icon-source.svg";

import "./Tabs.scss";

function Tabs(props) {
	const [Data, setData] = useState([]);
	const [overview, setOverView] = useState([]);
	const [structure, setStructure] = useState([]);
	const [surface, setSerface] = useState([]);

	const data_tabs = document.querySelectorAll(".planet__tabs-tab");
	const data_values = document.querySelectorAll(
		".planet__tabs-content--content"
	);
	const data_images = document.querySelectorAll(".planet__image");

	const changeTab = (event) => {
		const data_tab = event.target.dataset.tab;
		const data_value = document.querySelector(`[data-value="${data_tab}"]`);
		const data_image = document.querySelector(
			`[data-image="${data_tab}-img"]`
		);

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

		for (let x = 0; x < data_images.length; x++) {
			const data_image_element = data_images[x];
			console.log(data_image_element);
			data_image_element.classList.remove(`planet__image--active`);
		}
		data_image.classList.add(`planet__image--active`);
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
					<span className="number">01</span>Overview
				</span>
				<span
					className="planet__tabs-tab"
					data-tab="structure"
					onClick={changeTab}
				>
					<span className="number">02</span>Structure
				</span>
				<span
					className="planet__tabs-tab"
					data-tab="surface"
					onClick={changeTab}
				>
					<span className="number">02</span>Surface
				</span>
			</div>
			<div className="divider"></div>
			<div className="planet__tabs-image">
				<div
					className="planet__image planet__image--active"
					data-image="overview-img"
				>
					<img
						className={`planet__image-${props.id}`}
						src={require(`../../images/planet-${props.id}.svg`)}
						alt={`${props.id}`}
					/>
				</div>
				<div className="planet__image" data-image="structure-img">
					<img
						className={`planet__image-${props.id}--structure`}
						src={require(`../../images/planet-${props.id}-internal.svg`)}
						alt={`${props.id}`}
					/>
				</div>
				<div className="planet__image" data-image="surface-img">
					<img
						className={`planet__image-${props.id}`}
						src={require(`../../images/planet-${props.id}.svg`)}
						alt={`${props.id}`}
					/>
				</div>
			</div>
			<div className="planet__tabs-content">
				<div
					className="planet__tabs-content--content active"
					data-value="overview"
				>
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

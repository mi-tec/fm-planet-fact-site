import React from "react";

function Tabs(props) {
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
			<div className="planet__tabs-content">
				<div
					className="planet__tabs-content--content active"
					data-value="overview"
				>
					overview
				</div>
				<div
					className="planet__tabs-content--content"
					data-value="structure"
				>
					structure
				</div>
				<div
					className="planet__tabs-content--content"
					data-value="surface"
				>
					surface
				</div>
			</div>
		</>
	);
}

export default Tabs;

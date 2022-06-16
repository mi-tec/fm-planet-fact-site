import React, { useState } from "react";
import logo from "../../logo.svg";

import { Link } from "react-router-dom";

import localJson from "../data/data.json";

import "./Header.scss";

export default function Header() {
	const [isShowMobileMenu, setShowMobileMenu] = useState(false);

	const url_string = window.location.href.toLowerCase();
	const url = new URL(url_string);
	const patchname = url.pathname;
	const id = patchname.replace("/", "");

	const toggleClass = () => {
		setShowMobileMenu(!isShowMobileMenu);
		const data_tabs = document.querySelectorAll(".planet__tabs-tab");
		const data_values = document.querySelectorAll(
			".planet__tabs-content--content"
		);

		for (let i = 0; i < data_values.length; i++) {
			const data_value_element = data_values[i];
			if (i === 0) {
				data_value_element.classList.add(`active`);
			} else {
				data_value_element.classList.remove(`active`);
			}
		}

		for (let y = 0; y < data_tabs.length; y++) {
			const data_tab_element = data_tabs[y];
			if (y === 0) {
				data_tab_element.classList.add(`planet__tabs-tab--${id}`);
			} else {
				data_tab_element.classList.remove(`planet__tabs-tab--${id}`);
			}
		}
	};

	return (
		<>
			<header className="header">
				<div className="brand">
					<img src={logo} className="brand__logo" alt="logo" />
					<div
						className={`menu-toggle ${
							isShowMobileMenu ? "menu-toggle__activate" : ""
						}`}
						onClick={toggleClass}
					>
						<span className="bar"></span>
						<span className="bar"></span>
						<span className="bar"></span>
					</div>
				</div>
				<div className="divider"></div>
				<div
					className={`navigation ${
						isShowMobileMenu ? "navigation--active" : ""
					}`}
				>
					<ul className="navigation__list">
						{localJson.map((data) => (
							<li
								className={`navigation__list-item navigation__list-item--${data.name.toLowerCase()}`}
								key={data.name}
							>
								<Link
									to={`/${data.name.toLowerCase()}`}
									onClick={toggleClass}
								>
									{data.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</header>
		</>
	);
}

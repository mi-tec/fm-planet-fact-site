import React, { useState } from "react";
import logo from "../../logo.svg";

import { Link } from "react-router-dom";

import localJson from "../data/data.json";

import "./Header.scss";

export default function Header() {
	const [isShowMobileMenu, setShowMobileMenu] = useState(false);

	const toggleClass = () => {
		setShowMobileMenu(!isShowMobileMenu);
	};

	return (
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
	);
}

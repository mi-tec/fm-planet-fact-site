import React, { useState } from "react";
import logo from "../../logo.svg";

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
					<li className="navigation__list-item navigation__list-item--mercury">
						<a href="/">mercury</a>
					</li>
					<li className="navigation__list-item navigation__list-item--venus">
						<a href="/">venus</a>
					</li>
					<li className="navigation__list-item navigation__list-item--earth">
						<a href="/">earth</a>
					</li>
					<li className="navigation__list-item navigation__list-item--mars">
						<a href="/">mars</a>
					</li>
					<li className="navigation__list-item navigation__list-item--jupiter">
						<a href="/">jupiter</a>
					</li>
					<li className="navigation__list-item navigation__list-item--saturn">
						<a href="/">saturn</a>
					</li>
					<li className="navigation__list-item navigation__list-item--uranus">
						<a href="/">uranus</a>
					</li>
					<li className="navigation__list-item navigation__list-item--neptune">
						<a href="/">neptune</a>
					</li>
				</ul>
			</div>
		</header>
	);
}

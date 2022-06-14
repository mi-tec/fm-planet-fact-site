import React, { Component } from "react";
import logo from "../../logo.svg";

import "./Header.scss";

export default class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="brand">
					<img src={logo} className="brand__logo" alt="logo" />
					<div className="menu-toggle">
						<span className="bar"></span>
						<span className="bar"></span>
						<span className="bar"></span>
					</div>
				</div>
				<div className="navigation">
					<ul className="navigation__list">
						<li className="navigation__list-item navigation__list-item--mercury">
							<a href="https://www.google.com">mercury</a>
						</li>
						<li className="navigation__list-item navigation__list-item--venus">
							<a href="https://www.google.com">venus</a>
						</li>
						<li className="navigation__list-item navigation__list-item--earth">
							<a href="https://www.google.com">earth</a>
						</li>
						<li className="navigation__list-item navigation__list-item--mars">
							<a href="https://www.google.com">mars</a>
						</li>
						<li className="navigation__list-item navigation__list-item--jupiter">
							<a href="https://www.google.com">jupiter</a>
						</li>
						<li className="navigation__list-item navigation__list-item--saturn">
							<a href="https://www.google.com">saturn</a>
						</li>
						<li className="navigation__list-item navigation__list-item--uranus">
							<a href="https://www.google.com">uranus</a>
						</li>
						<li className="navigation__list-item navigation__list-item--neptune">
							<a href="https://www.google.com">neptune</a>
						</li>
					</ul>
				</div>
			</header>
		);
	}
}

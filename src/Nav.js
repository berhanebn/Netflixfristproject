import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
	const [show, handleshow] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleshow(true);
			} else handleshow(false);
		});
		return () => {
			window.removeEventListener("scroll", handleshow());
		};
	}, []);

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<img
				className="nav__logo"
				src="https://www.bing.com/th?id=OIP.AVu3t2-rFhHvoVcvkA38kQHaEK&amp;w=192&amp;h=106&amp;c=8&amp;rs=1&amp;qlt=90&amp;o=6&amp;pid=3.1&amp;rm=2"
				alt="Netflix Logo"
			/>

			<img
				className="nav__avatar"
				src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
				alt="Avatar logo"
			/>
		</div>
	);
}

export default Nav;

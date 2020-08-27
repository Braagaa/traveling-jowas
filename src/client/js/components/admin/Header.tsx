import React from 'react';

interface Props {
	navToggler: () => void;
}

const Header = function({navToggler}: Props) {
	return (
		<header className="navbar navbar-dark sticky-top flex-md-row bd-navbar d-flex justify-content-between">
			<img src="/assets/images/logo_word_white.png"/>
			<button onClick={navToggler} className="navbar-toggler d-md-none collapsed" type="button" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
		</header>
	);
};

export default Header;

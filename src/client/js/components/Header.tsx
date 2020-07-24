import React, {useState} from 'react';
import HamburgerMenu from './HamburgerMenu';
import MobileMenu from './MobileMenu';
import Nav from './Nav';
import Socials from './Socials';

const Header = function() {
	const [isOpen, setIsOpen] = useState(false);

	return(
		<React.Fragment>
			<header className="header">
				<div className="header-inner">
					<div className="header-section">
						<div className="logo">
							<a href="/">
								<img 
									className="logo-image"
									src="/assets/images/logo_word_green.jpg" 
									alt="Logo for Traveling Jowas blog"
								/>	
							</a>
						</div>
						<Nav/>
					</div>
					<div className="header-section">
						<Socials/>
						<HamburgerMenu 
							isActive={isOpen} 
							setIsActive={setIsOpen}
						/>
					</div>
				</div>
			</header>
			<MobileMenu isActive={isOpen}/>
		</React.Fragment>
	);
}

export default Header;

import './header.css';

import { useState, useEffect } from 'react';

import { IoClose, IoMenu } from 'react-icons/io5';

import Logo from '../../assets/logo.svg';
const Header = () => {
	const [lastScrollY, setLastScrollY] = useState(0);
	const [toggle, setToggle] = useState(false);
	const [show, setShow] = useState(false);

	const controlNavbar = () => {
		if (window.scrollY > 100) {
			if (window.scrollY > lastScrollY) {
				setShow(true);
			} else {
				setShow(false);
			}
			setLastScrollY(window.scrollY);
		} else {
			setShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', controlNavbar);

		return () => {
			window.removeEventListener('scroll', controlNavbar);
		};
	}, [lastScrollY]);

	return (
		<header className={`header ${show ? 'active' : ''}`}>
			<div className="container">
				<a href="#" className="logo">
					<img src={Logo} alt="logo" width="187" height="38" />
				</a>

				{/* navbar */}
				<nav className={`navbar ${toggle ? 'active' : ''}`} data-navbar>
					<div className="navbar-top">
						<a href="#" className="logo">
							<img src={Logo} alt="logo" width="187" height="38" />
						</a>

						<button aria-label="close-menu" onClick={() => setToggle(false)}>
							<IoClose className="svg" />
						</button>
					</div>

					{/* navbar list */}

					<ul className="navbar-list">
						<li className="navbar-item" onClick={() => setToggle(false)}>
							<a href="#" className={`navbar-link ${toggle ? 'active' : ''}`}>
								Home
							</a>
						</li>

						<li className="navbar-item" onClick={() => setToggle(false)}>
							<a href="#" className="navbar-link">
								About
							</a>
						</li>

						<li className="navbar-item" onClick={() => setToggle(false)}>
							<a href="#" className="navbar-link">
								Services
							</a>
						</li>

						<li className="navbar-item" onClick={() => setToggle(false)}>
							<a href="#" className="navbar-link">
								pricing
							</a>
						</li>

						<li className="navbar-item" onClick={() => setToggle(false)}>
							<a href="#" className="navbar-link">
								contact
							</a>
						</li>
					</ul>

					{/* header action */}

					<div className="header-action">
						<a href="#" className="login-btn">
							Login
						</a>
						<a href="#" className="btn btn-primary">
							Sign Up
						</a>
					</div>
				</nav>
				<button
					onClick={() => setToggle(true)}
					className="nav-toggle-btn"
					aria-label="open menu">
					<IoMenu />
				</button>

				<div className={`overlay ${toggle ? 'active' : ''}`}></div>
			</div>
		</header>
	);
};

export default Header;

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export const navList = [
	{ name: "Home", link: "/", title: "Home", },
	{ name: "Portfolio", link: "/portfolio", title: "Portfolio", },
	{ name: "About", link: "/about", title: "about", },
	{ name: "Services", link: "/service", title: "Services I offer", },
	{ name: "Contact", link: "/contact", title: "Contact", },
	{ name: "hioooo", link: "/homeCheck", title: "Contact", },
];
export const navListIcon = [
	{ name: <i className="fa-brands fa-whatsapp"></i>, link: "/whatsapp.com", title: "Services_i_offer", },
	{ name: <i className="fa-brands fa-facebook"></i>, link: "http//:facebook.com", title: "Services_i_offer", },
	{ name: <i className="fa-brands fa-twitter"></i>, link: "/twitter.com", title: "Services_i_offer", },
	{ name: <i className="fa-brands fa-figma"></i>, link: "/figma.com", title: "Services_i_offer", },
	{ name: <i className="fa-brands fa-github"></i>, link: "/github.com", title: "Services_i_offer", },
	{ name: <i className="fa-brands fa-linkedin"></i>, link: "/linkedin.com", title: "Services_i_offer", },
];

const HeaderComp = () => {
	const router = useRouter();

	const [navDisplay, setNavDisplay] = useState(false);

	const showNavHandler = () => {
		setNavDisplay(true);
	};
	const hideNavHandler = () => {
		setNavDisplay(false);
	};
	return (

		<header className="header">

			<nav className="header-nav container">
				{/* LOGO */}
				<div className="header-nav-right">
					<div className="header-nav-right-logo">
						<a href=""><h1 title="logo_for_LANDLORD">LD<span>.</span></h1></a>
					</div>
				</div>
				{/* DESKTOP VIEW */}
				<div className="header-nav-inner">
					<div className="header-nav-inner-desktop">
						<div className="header-nav-inner-desktop-menu">
							{navList.map((item) => {
								return (
									<div key={item.name} className="header-nav-inner-desktop-menu-inner">
										<ul>
											<li><a className={router.pathname == `${item.link}` ? "active" : ""} href={item.link} title={item.title}><h1>{item.name}<span>.</span></h1></a></li>
										</ul>
									</div>
								)
							})}
						</div>
						<div className="header-nav-inner-desktop-line"></div>
						<div className="header-nav-inner-desktop-icons">
							{/* DESKTOP ICON VIEW */}
							<div className="header-nav-inner-desktop-icons-inner">
								<div className="header-nav-inner-desktop-icons-inner-menu">
									{navListIcon.map((icons, i) => {
										return (
											<div key={i}>
												<a href={icons.link}>{icons.name}</a>

											</div>
										)
									})}
								</div>
							</div>
						</div>
					</div>

				</div>
				{/* MOBILE DEVICE VIEW */}
				<div className="header-nav-mobile-nav">
					<div className="header-nav-mobile-nav-inner">
						<div className={`header-nav-mobile-nav-menu ${navDisplay ? "show" : ""}`}>
							<div className="header-nav-mobile-nav-menu-inner">

								{navList.map((nav, i) => (
									<ul key={i}>
										<li className={router.pathname == `${nav.link}` ? "active" : ""}>
											<Link href={nav.link}>
												<a>{nav.name}<span>.</span></a>
											</Link>
										</li>
									</ul>

								))}

							</div>
						</div>
						<div className="header-nav-mobile-nav-bars">
							{navDisplay ? (
								<i className="fa-solid fa-x fa-red c-pointer" title="Close"  onClick={hideNavHandler}></i>
							) : (
								<i className="fas fa-bars c-pointer" title="Menu" onClick={showNavHandler}> </i>
							)}
						</div>
					</div>
				</div>
			</nav>
		</header>

	);
};

export default HeaderComp;

/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export const navList = [
	{ name: "Discover", link: "/houses", title: "Home", icon: "fas fa-earth", },
	{ name: "Bookmark", link: "/", title: "Portfolio", icon: "fas fa-bookmark", },
	{ name: "Profile", link: "/", title: "about", icon: "fas fa-person", },

];
const FooterComp = () => {
	const router = useRouter();

	return (
		<footer className="search_page_nav">
			{navList.map((item) => {
				return (
					<div key={item.name} className="search_page_nav_inner">
						<a className={router.pathname == `${item.link}` ? "active" : ""} href={item.link} title={item.title}>
							<i className={item.icon}></i>
							<h1>{item.name}</h1>
						</a>
					</div>
				)
			})}
		</footer>
	);
};

export default FooterComp;

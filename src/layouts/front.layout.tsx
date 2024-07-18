import React, { useState } from "react";
import { useRouter } from "next/router";
import "animate.css";
import FooterComp from "../components/FooterComp";
const FrontLayout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
	const [background, setBackground] = useState(false)
	const router = useRouter();
	const darkMode = () => {
		setBackground(true);
	};
	const lightMode = () => {
		setBackground(false);
	};
	const [switchhider, setSwitchhider] = useState(true)
	const showSwitch = () => {
		setSwitchhider(false);
	};
	const hideSwitch = () => {
		setSwitchhider(true);
	};

	return (
		<div className={`app animate__animated animate__zoomInUp ${background ? "app" : "dark"}`} >
		
			<div className="mode_switch">
				<div className={`${switchhider ? "mode_switch_inner" : "show"}`}>
					{background ? (
						<i className="fas fa-moon c-pointer" onClick={lightMode}> </i>
					) : (
						<i className="fas fa-sun c-pointer" onClick={darkMode}> </i>
					)
					}
				</div>
				<div className="mode_switch_hider">
					{switchhider ? (
						<i className="fas fa-chevron-right c-pointer" onClick={showSwitch}> </i>
					) : (
						<i className="fas fa-chevron-left c-pointer" onClick={hideSwitch}> </i>
					)
					}
				</div>
			</div>
		<div className="app_inner" onClick={hideSwitch}>
		{children}
	<FooterComp/>
		</div>
		</div>
	);
};

export default FrontLayout;

import React from "react";
import PropTypes from "prop-types";

import WOW from "wowjs";

export default class Background extends React.Component {
	componentDidMount() {
		new WOW.WOW().init();
	}

	render() {
		return (
			<div id="my-background" className="background">
				<img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiF45DfzpnlAhUIPI8KHW5fBsIQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.glassdoor.co.in%2FOverview%2FWorking-at-C-R-I-Pumps-EI_IE573258.11%2C22.htm&psig=AOvVaw3wfI4NslPyO0go_wNjfAFi&ust=1571069131715500" alt=""/>
				<div className="top-container flex">
					
					<h1>
					 C.R.I. PUMPS<br />&apos;WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
						&apos;
						<br />for the 4th time.
					</h1>
					{/* offset can be cahnged in node modules wowjs default file */}
					<button
						className={"work-button " + this.props.bounceIn}
						data-wow-offset="0"
						onClick={() => {
							let node = document.getElementById(
								this.props.aboutRef.current.props.id
							);
							window.scrollTo({
								top: node.offsetTop,
								behavior: "smooth"
							});
						}}>
						See More Details...
					</button>
				</div>
			</div>
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "rsuite";
import image1 from "./images/Screenshot (2).png";
import image2 from "./images/Screenshot (3).png";
import image3 from "./images/Screenshot (4).png";
import image4 from "./images/Screenshot (5).png";
import image5 from "./images/Screenshot (6).png";
import image6 from "./images/Screenshot (7).png";
import image7 from "./images/Screenshot (8).png";
import image8 from "./images/Screenshot (9).png";
import image9 from "./images/Screenshot (10).png";
import image10 from "./images/Screenshot (11).png";
import "./discliamer.css";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

function Disclaimer(props) {
	let navigate = useNavigate();

	const [curr, setCurr] = useState(1);

	const imageStyle = {
		height: "100%",
		width: "100%",
		objectFit: "contain",
	};

	const getImage = () => {
		switch (curr) {
			case 1:
				return image3;
			case 2:
				return image4;
			case 3:
				return image1;
			case 4:
				return image2;
			case 5:
				return image5;
			case 6:
				return image6;
			case 7:
				return image7;
			case 8:
				return image10;
			case 9:
				return image9;
			case 10:
				return image8;
			default:
				return image1;
		}
	};

	const nextClick = () => {
		if (curr === 10) {
			setCurr(1);
		} else {
			setCurr(curr + 1);
		}
	};

	const prevClick = () => {
		if (curr === 1) {
			setCurr(10);
		} else {
			setCurr(curr - 1);
		}
	};

	return (
		<div
			style={{
				backgroundColor: "#07020d",
				fontFamily: "Inconsolata",
				minHeight: "100vh",
				paddingLeft: "6rem",
				paddingRight: "6rem",
				paddingTop: "1rem",
				padddingBottom: "1rem",
			}}
		>
			<div style={{ color: "#f1e9db", fontSize: "25px" }}>
				Disclaimer: This is a freelance project I built for Dstar
				electrials. I was able to get permission to use screenshots the
				webiste to showcase my work. This is a stripped down version of
				the original website, it only contains the first step of the Job
				tracking app I made for Dstar. Thank you for visiting.
			</div>

			<div
				id="container"
				style={{
					height: "550px",
					display: "grid",
					gridTemplateColumns: "1fr 10fr 1fr",
					marginTop: "10px",
				}}
			>
				<GrFormPrevious
					onClick={prevClick}
					style={{
						height: "50px",
						width: "50px",
						marginTop: "auto",
						marginBottom: "auto",
						marginRight: "auto",
						marginLeft: "auto",
					}}
					color="white"
				/>

				<img src={getImage()} style={imageStyle} />

				<GrFormNext
					onClick={nextClick}
					style={{
						height: "50px",
						width: "50px",
						marginTop: "auto",
						marginBottom: "auto",
						marginRight: "auto",
						marginLeft: "auto",
					}}
					color="white"
				/>
			</div>
                        <div></div>
		</div>
	);
}

export default Disclaimer;

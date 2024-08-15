import React, { useState, useEffect } from "react";
import "./portfolio.css";
import { IconButton, ButtonToolbar, Panel } from "rsuite";
import "@fontsource/inconsolata";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { BiLogoGmail } from "react-icons/bi";

function Portfolio() {
	const [hover, setHover] = useState({});
	const [hover2, setHover2] = useState({});
	const [hover3, setHover3] = useState({});
	const [hover4, setHover4] = useState({});
	const [hover5, setHover5] = useState({});
	const [hover6, setHover6] = useState({});
	const [hover7, setHover7] = useState({ fontStyle: "italic" });
	let navigate = useNavigate();

	const hvrstyle = {
		color: "rgba(93, 183, 222, 1)",
		fontSize: "20px",
	};
	const nonhvrstyle = {
		color: "#F1E9DB",
		fontSize: "20px",
	};

	const [pointer, setPointer] = useState({ left: "0px", top: "0px" });

	return (
		<div
			className="container"
			onMouseMove={(event) =>
				setPointer({
					left: `${event.clientX - 250}px`,
					top: `${event.clientY - 250}px`,
				})
			}
		>
			<div id="blob" style={pointer} />
			<div id="blur" />

			<div
				className="styles"
				style={{
					fontFamily: "Inconsolata",
				}}
			>
				<div className="sticky">
					<div>
						<div id="Magic">
							<span>Hari</span> <span>Bheesetti</span>
						</div>
						<div
							style={{
								fontSize: "30px",
								fontWeight: "bold",
								letterSpacing: "-0.5px",
								color: "#F1E9DB",
							}}
						>
							Full Stack Developer
						</div>
						<div
							style={{
								fontSize: "25px",
								fontStyle: "italic",
								color: "#F1E9DB",
							}}
						>
							I build robust, and intuitive software.
						</div>
					</div>

					<div className="socials">
						<FaLinkedin
							onClick={() =>
								window.open(
									"https://www.linkedin.com/in/hari-bheesetti-24b8231a3/"
								)
							}
							className="icon"
							style={{
								width: "50px",
								height: "50px",
							}}
						/>
						<FaGithub
							onClick={() =>
								window.open("https://github.com/hbheesetti")
							}
							className="icon"
							style={{
								width: "50px",
								height: "50px",
							}}
						/>
						<FaInstagramSquare
							onClick={() =>
								window.open(
									"https://www.instagram.com/h_ri_ch_r_n/"
								)
							}
							className="icon"
							style={{
								width: "50px",
								height: "50px",
							}}
						/>
						<BiLogoGmail
							onClick={() =>
								window.open("mailto:bvshc17@gmail.com")
							}
							className="icon"
							style={{ width: "50px", height: "50px" }}
						/>
					</div>
				</div>
				<div
					style={{
						color: "#F1E9DB",
					}}
					className="body"
				>
					<div className="about">
						<p>
							In 2016, I decided to try my hand at an elective
							computer science class in high school. One of my
							first assignments in this class was to make a simple
							tic-toe game, and during the process of building it
							I learned the importance of ";". I felt a rush of
							excitement and pride as I watched the game run
							smoothly. From that moment on, I was hooked on the
							thrill of solving problems and creating new things
							through programming.
						</p>
						<p style={{ marginTop: "1rem" }}>
							Fast forward to today. I've recently graduated from
							the University of Alberta with a Computer Science
							degree. I've had the privilege of making software
							for a local business, a university, and a startup. I
							most enjoy building intuitive software that is
							secure and pleasing to the eye. As I am entering the
							early stages of my career, I am looking for
							opportunities to learn from a team that is
							passionate about building high-quality software.
						</p>
						<p style={{ marginTop: "1rem" }}>
							When I’m not at the computer, I’m usually biking,
							hiking, hanging out with friends at a cafe, or
							figuring out which mountain to hike next.
						</p>
					</div>

					<div className="Exp">
						<p className="title">
							Experience |
							<span
								style={hover7}
								onMouseEnter={() =>
									setHover7({
										fontStyle: "italic",
										textDecoration: "underline",
									})
								}
								onMouseLeave={() =>
									setHover7({ fontStyle: "italic" })
								}
								onClick={() =>
									window.open(
										"https://drive.google.com/file/d/1jCTkO__6xQG5tnETpFMa3TG0H5Lze0uN/view?usp=sharing"
									)
								}
							>
								View Full Resume
							</span>
						</p>
						<div
							className="expele"
							onMouseEnter={() => setHover(hvrstyle)}
							onMouseLeave={() => setHover(nonhvrstyle)}
						>
							<div className="expHeader">
								<p style={{ marginLeft: "5px" }}>
									May - Aug 2023
								</p>
							</div>
							<div className="expBody">
								<p
									className="expTitle"
									style={hover}
									onClick={() =>
										window.open(
											"https://dstarelectric.com/"
										)
									}
								>
									Freelance Full stack developer | Dstar
									<HiOutlineExternalLink
										style={{
											marginLeft: "3px",
											position: "absolute",
										}}
									/>
								</p>
								<p>
									Built and deployed job management software
									for a local business. Developed software in
									close collaboration with various teams to
									meet the client's needs. Some key functions
									include user authentication, job tracking,
									and a dashboard for managing active jobs.
								</p>

								<ul
									style={{
										display: "flex",
										maxWidth: "100%",
										flexWrap: "wrap",
										listStyleType: "none",
									}}
								>
									<li className="Tag">React</li>
									<li className="Tag">NodeJs</li>
									<li className="Tag">Django</li>
									<li className="Tag">JavaScript</li>
									<li className="Tag">Python</li>
									<li className="Tag">Heroku</li>
								</ul>
							</div>
						</div>
						<div
							className="expele"
							onMouseEnter={() => setHover2(hvrstyle)}
							onMouseLeave={() => setHover2(nonhvrstyle)}
						>
							<div className="expHeader">
								<p style={{ marginLeft: "5px" }}>
									May - Aug 2022
								</p>
							</div>
							<div className="expBody">
								<p
									className="expTitle"
									style={hover2}
									onClick={() =>
										window.open("https://ntwist.com/")
									}
								>
									Software Development Intern | Ntwist
									<HiOutlineExternalLink
										style={{
											marginLeft: "3px",
											position: "absolute",
										}}
									/>
								</p>
								<p>
									Convert Existing websites into Windows and
									MacOS applications. Developed a
									comprehensive test suite for the apps to
									ensure they were bug-free. Worked with
									multiple teams to ensure the product meets
									the needs.
								</p>

								<ul
									style={{
										display: "flex",
										maxWidth: "100%",
										flexWrap: "wrap",
										listStyleType: "none",
									}}
								>
									<li className="Tag">React</li>
									<li className="Tag">NodeJs</li>
									<li className="Tag">MongoDB</li>
									<li className="Tag">JavaScript</li>
									<li className="Tag">Python</li>
									<li className="Tag">Pandas</li>
								</ul>
							</div>
						</div>
						<div
							className="expele"
							onMouseEnter={() => setHover3(hvrstyle)}
							onMouseLeave={() => setHover3(nonhvrstyle)}
						>
							<div className="expHeader">
								<p style={{ marginLeft: "5px" }}>
									May - Oct 2022
								</p>
							</div>
							<div className="expBody">
								<p
									className="expTitle"
									style={hover3}
									onClick={() =>
										window.open("https://ntwist.com/")
									}
								>
									Software Development Intern | Ntwist
									<HiOutlineExternalLink
										style={{
											marginLeft: "3px",
											position: "absolute",
										}}
									/>
								</p>
								<p>
									Used MatPlotLib and Pandas to create a the
									required data visulizations for the client.
									Worked with the client to ensure the data
									was accurate and the visulizations were easy
									to understand. Created a templating tool for
									internal use that helped cut down production
									time by 30%.
								</p>

								<ul
									style={{
										display: "flex",
										maxWidth: "100%",
										flexWrap: "wrap",
										listStyleType: "none",
									}}
								>
									<li className="Tag">React</li>
									<li className="Tag">NodeJs</li>
									<li className="Tag">MongoDB</li>
									<li className="Tag">JavaScript</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="Projects">
						<p className="title">Projects</p>
						<div
							className="expele"
							onMouseEnter={() => setHover3(hvrstyle)}
							onMouseLeave={() => setHover3(nonhvrstyle)}
						>
							<div className="expHeader">
								<p style={{ marginLeft: "5px" }}>2023</p>
							</div>
							<div className="expBody">
								<p
									className="expTitle"
									style={hover3}
									onClick={() => navigate("disclaimer/")}
								>
									Job Management | Screenshots
									<HiOutlineExternalLink
										style={{
											marginLeft: "3px",
											position: "absolute",
											bottom: "0px",
										}}
									/>
								</p>
								<p>
									This is freelance project where I was tasked
									with creating a job management software for
									a local business. The software had to be
									able to track jobs, manage users, and have a
									dashboard for the admin to manage active
									jobs. I was the sole developer on this
									project and was responsible for the entire
									stack. Click on this to try it out.
								</p>

								<ul
									style={{
										display: "flex",
										maxWidth: "100%",
										flexWrap: "wrap",
										listStyleType: "none",
									}}
								>
									<li className="Tag">React</li>
									<li className="Tag">NodeJs</li>
									<li className="Tag">Django</li>
									<li className="Tag">Python</li>
									<li className="Tag">JavaScript</li>
								</ul>
							</div>
						</div>
						<div
							className="expele"
							onMouseEnter={() => setHover4(hvrstyle)}
							onMouseLeave={() => setHover4(nonhvrstyle)}
						>
							<div className="expHeader">
								<p style={{ marginLeft: "5px" }}>2023</p>
							</div>
							<div className="expBody">
								<p
									className="expTitle"
									style={hover4}
									onClick={() => navigate("/calendar")}
								>
									Calender Enhancements | Video Demo
									<HiOutlineExternalLink
										style={{
											marginLeft: "3px",
											position: "absolute",
											bottom: "0px",
										}}
									/>
								</p>
								<p>
									This was group project where we were tasked
									to create a scheduling app that would allow
									admin, professors, and students to view and
									edit their schedules. Furthermore this app
									incuded a search feature that allowed users
									to search by classes, professros, locations
									and times etc. It can also generate reports
									of a specific person or programs schedule
									etc.
								</p>

								<ul
									style={{
										display: "flex",
										maxWidth: "100%",
										flexWrap: "wrap",
										listStyleType: "none",
									}}
								>
									<li className="Tag">React</li>
									<li className="Tag">NodeJs</li>
									<li className="Tag">Django</li>
									<li className="Tag">Python</li>
									<li className="Tag">JavaScript</li>
								</ul>
							</div>
						</div>
						<div
							className="expele"
							onMouseEnter={() => setHover5(hvrstyle)}
							onMouseLeave={() => setHover5(nonhvrstyle)}
						>
							<div className="expHeader">
								<p style={{ marginLeft: "5px" }}>2023</p>
							</div>
							<div className="expBody">
								<p className="expTitle" style={hover5}>
									7 by 7 Ninuki Solver
								</p>
								<p>
									I made a computer player that tries to play
									perfectly for a mini version of the chinese
									game Go. I implemented various algorithms to
									find the best move in a given postion. I
									made use of algorithems such as Alphabeta
									search, Monte Carlo tree search with UCT,
									and incorporated machine learning based
									feature detection to detect repeated
									patterns that result in a win or a loss.
								</p>

								<ul
									style={{
										display: "flex",
										maxWidth: "100%",
										flexWrap: "wrap",
										listStyleType: "none",
									}}
								>
									<li className="Tag">Python</li>
								</ul>
							</div>
						</div>
						<div
							className="expele"
							onMouseEnter={() => setHover6(hvrstyle)}
							onMouseLeave={() => setHover6(nonhvrstyle)}
						>
							<div className="expHeader">
								<p style={{ marginLeft: "5px" }}>2023</p>
							</div>
							<div className="expBody">
								<p className="expTitle" style={hover6}>
									Socially distributed
								</p>
								<p>
									This is a social networking web application
									that is linked with similar applications
									made by other student’s web applications.
									Connected seamlessly with 3 other
									applications using REST API protocols.
									Served as a product manager and scrum master
									for the duration of the project.
								</p>

								<ul
									style={{
										display: "flex",
										maxWidth: "100%",
										flexWrap: "wrap",
										listStyleType: "none",
									}}
								>
									<li className="Tag">React</li>
									<li className="Tag">NodeJs</li>
									<li className="Tag">Django</li>
									<li className="Tag">Python</li>
									<li className="Tag">JavaScript</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;

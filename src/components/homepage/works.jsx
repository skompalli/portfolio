import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./SealUCB.svg"
								alt="uc berkeley"
								className="work-image"
							/>
							<div className="work-title">UC Berkeley</div>
							<div className="work-subtitle">
								Curriculum Developer
							</div>
							<div className="work-duration">Jan 2025 - Present</div>
						</div>

						<div className="work">
							<img
								src="./Verizon_V.webp"
								alt="verizon"
								className="work-image"
							/>
							<div className="work-title">Verizon</div>
							<div className="work-subtitle">
								Solutions Architect Intern
							</div>
							<div className="work-duration">Summer 2024</div>
						</div>

						<div className="work">
							<img
								src="./jfwlogo.png"
								alt="jackson family wines"
								className="work-image"
							/>
							<div className="work-title">Jackson Family Wines</div>
							<div className="work-subtitle">
								Data Science Intern
							</div>
							<div className="work-duration">Summer 2023</div>
						</div>

						<div className="work">
							<img
								src="./juni-learning-logo.png"
								alt="juni learning"
								className="work-image"
							/>
							<div className="work-title">Juni Learning</div>
							<div className="work-subtitle">
								Computer Science Instructor
							</div>
							<div className="work-duration">June 2022- May 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

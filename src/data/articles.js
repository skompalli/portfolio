import React from "react";

function article_1() {
	return {
		date: "Fall 2022",
		title: "Diversity Data Analysis Tool",
		description: "As part of the Data Discovery Program at UC Berkeley, I was able to coordinate directly with United States Air Force Representatives to build a tool that provides a holistic measure for assessing diversity, equity, and inclusion within the United States Air Force. ",
		keywords: [
			"Data Discovery Program",
			"Suparna",
			"Suparna K",
			"Suparna Kompalli",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.full-image {
					align-self: center;
					outline: 2px solid #f4f4f5;
					position: center
					height: 90%;
					width: 90%;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
					As part of the Data Discovery Program at UC Berkeley, I was able to coordinate directly with United States Air Force Representatives to build a tool that provides a holistic measure for assessing diversity, equity, and inclusion within the United States Air Force. I led a team to design a Tableau Dashboard that enables hiring manages to identify and analyze barriers to entry. I explored the impact of local demographic on the population within the Air Force.
						</div>
					<img
						src="../DDAT.png"
						alt="Unable to load image."
						className="full-image"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;

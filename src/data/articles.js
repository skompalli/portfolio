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
		date: "Spring 2024",
		title: "Deep Learning: Digit Detection",
		description:
			"I implemented a fully connected convolutional neural network with backpropagation for image recognition on the MNIST dataset to precisely identify handwritten digits.",
		style: ``,
		keywords: [
			"Data Discovery Program",
			"Suparna",
			"Suparna K",
			"Suparna Kompalli",
		],
		body: (
			<React.Fragment>
				<div className="article-content"> 
					<div className="paragraph"> 
						I implemented a fully connected convolutional neural network complete with backpropagation for image recognition on the MNIST dataset to precisely identify handwritten digits. 
					</div>  
				</div>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "Spring 2023",
		title: "Natural Language Processing: Spam Emails",
		description:
			"I leveraged text mining and NLP to create a classifier with logistic regression to predict if an email was spam.",
		style: ``,
		keywords: [
			"Natural Language Processing",
			"Suparna",
			"Suparna K",
			"Suparna Kompalli",
		],
		body: (
			<React.Fragment>
				<div className="article-content"> 
					<div className="paragraph"> 
						I leveraged text mining and NLP to create a classifier with logistic regression to predict if an email was spam.
					</div>  
				</div>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: "Fall 2022",
		title: "Predicting Heart Disease",
		description:
			"I developed a classifier using the k-nearest neighbors method to predict heart disease in an individual based on attributes such as age, sex, cholesterol, and blood pressure. I performed data cleaning, exploratory data analysis, feature engineering and cross-validation.",
		style: ``,
		keywords: [
			"Classification",
			"Suparna",
			"Suparna K",
			"Suparna Kompalli",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph"> 
					Cardiovascular disease is the number one cause of death globally, taking over 17 million lives in a year. Heart failure is a common symptom of cardiovascular disease. Early detection in critical in treating heart diseases. I developed a classifier using the k-nearest neighbors method to predict heart disease in an individual based on attributes such as age, sex, cholesterol, and blood pressure. I performed data cleaning, exploratory data analysis, feature engineering and cross-validation using Python libraries Pandas, Matplotlib, and NumPy
					</div>

					<div className="paragraph">
						Some of the best applications of technology can be seen in the medical field. Using data science in modern medicine allows for better prevention of serious health conditions and aids in finding cures for life-threatening diseases. This was seen just recently when scientists were able to create a vaccine for COVID-19 in just under a year. This would not have been possible without modern technology which allows for rapid information sharing and analysis. This project can be extrapolated to predict heart disease, or even other diseases, for an individual in the future. We can use the information we already have to make more informed decisions that can save lives.
					</div>
					
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3, article_4];

export default myArticles;

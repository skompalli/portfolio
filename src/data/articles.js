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
					As part of the Data Discovery Program at UC Berkeley, I worked with United States Air Force Representatives to build a tool that provides a holistic measure for assessing diversity, equity, and inclusion within the United States Air Force. 
					I led a team to design a Tableau Dashboard that enables hiring manages to identify and analyze barriers to entry. 
					I explored the impact of local demographics on the population within the Air Force.
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
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}


				.half-image {
					width: 40%;
  					height: auto;
					align-self: center;
					outline: 1px solid #383636;
				}`,
		body: (
			<React.Fragment>
				<div className="article-content"> 
					<div className="paragraph"> 
						I implemented a fully connected convolutional neural network complete with backpropagation for image recognition on the MNIST dataset to precisely identify handwritten digits. 
						<br />
						<br />
						Before jumping into the actual CNN, it is important to better understand how the model will detect differences between digits. 
						By analyzing the covariance matrix, you can identify which pixels are most important for distinguishing between digits, as they will have the highest covariance with other pixels within the digit's structure. 
						Below is the covariance matrix for digit 0. 
						<br />
						<br />
					</div> 
					<img
						src="../covar.png"
						alt="Unable to load image."
						className="half-image"
					/> 
					<div className="paragraph">
					<br />
						Since each pixel is correlated with itself, the diagonal elements of the covariance matrix will generally be high, representing the variance of each pixel.
						Different digits will have distinct covariance patterns due to their unique shapes and writing styles, allowing for easier classification.
						Pixels in areas where the digit is typically absent (e.g., corners or the edges of the image) will have low variance since these regions are mostly blank across samples.
						The covariance matrix is crucial for techniques like Principal Component Analysis (PCA), which can be used to reduce the dimensionality of the data by identifying the most important variations across the pixels, allowing for more efficient classification. 
						<br />
						<br />
						This code implements a convolutional neural network (CNN) designed for image classification tasks, such as recognizing handwritten digits in the MNIST dataset. 
						The model consists of three convolutional layers that progressively extract spatial features from the input images. 
						Each convolutional layer is followed by a ReLU activation function to introduce non-linearity and a max-pooling operation to reduce the spatial dimensions, which helps in capturing the most important features while lowering computational complexity. 
						After the convolutional layers, the output is flattened into a one-dimensional vector and passed through two fully connected layers. 
						The first fully connected layer maps the extracted features to a higher-dimensional space, and the second layer reduces this to 10 outputs, corresponding to the digit classes (0–9). 
						This architecture combines feature extraction through convolution and pooling with classification through dense layers, making it effective for recognizing patterns in image data.
						<br />
						<br />
					(Since this project was completed for a class at school, I am unable to share the code repository) </div>
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
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}


				.half-image {
					width: 40%;
  					height: auto;
					align-self: right;
					outline: 1px solid #383636;
				}`,
		body: (
			<React.Fragment>
				<div className="article-content"> 
					<div className="paragraph"> 
						I leveraged text mining and NLP to create a binary classifier with logistic regression that can distinguish spam (junk or commercial or bulk) emails from ham (non-spam) emails.
						With this project, I refined my skills in feature engineering with text data, using sklearn library to process data and fit models, and validating the performance of my models to minimizing overfitting.
						<br />
						<br />
						I use a real world dataset: the emails used to train this model are actual spam and legitimate emails.
						Since the data is text, not numerical, I used feature engineering to create numeric features derived from the email text and use those features for logistic regression.
						<br />
						Some useful features I created track words and punctuation in the body of the email. 
						For example, I created features that detected if the email a reply (contains "Re:" in the subject) and number of total words.
						I also tracked occurences of exclamation points, uppercase letters, and words such as "free," "offer," and "html" to detect links in text.
						<br />
						<br />
					</div> 
						<img
						src="../wordshist.png"
						alt="Unable to load image."
						className="half-image"
					/> 
					<div className="paragraph"> 
						<br />
						<br />
						Using cross-validation and exploratory data analysis, I determined the best features to use in my model. For example, the  My final classifier achieved a 0.874 test accuracy and the ROC curve below.
						<br />
						<br />
					</div> 
						<img
						src="../rocspam.png"
						alt="Unable to load image."
						className="half-image"
						/> 
					<div className="paragraph"> 
						<br />
						<br />
						(Since this project was completed for a class at school, I am unable to share the code repository)
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
						Cardiovascular disease is the number one cause of death globally, taking over 17 million lives in a year. 
						Heart failure is a common symptom of cardiovascular disease. Early detection in critical in treating heart diseases. 
						I developed a classifier using the k-nearest neighbors method to predict heart disease in an individual based on attributes such as age, sex, cholesterol, and blood pressure. 
						I performed data cleaning, exploratory data analysis, feature engineering and cross-validation using Python libraries Pandas, Matplotlib, and NumPy
						<br />
						<br />
						Some of the best applications of technology can be seen in the medical field. 
						Using data science in modern medicine allows for better prevention of serious health conditions and aids in finding cures for life-threatening diseases. 
						This was seen just recently when scientists were able to create a vaccine for COVID-19 in just under a year. 
						This would not have been possible without modern technology which allows for rapid information sharing and analysis. 
						This project can be extrapolated to predict heart disease, or even other diseases, for an individual in the future. 
						We can use the information we already have to make more informed decisions that can save lives.
					</div>
					
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3, article_4];

export default myArticles;

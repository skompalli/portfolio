import { Link } from "react-router-dom";


const INFO = {
	main: {
		title: "Suparna Kompalli Portfolio",
		name: "Suparna Kompalli",
		email: "skompalli@berkeley.edu",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/",
		linkedin: "https://www.linkedin.com/in/suparna-kompalli-79463b229/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Suparna Kompalli",
		description:
		"Computer Science and Data Science \nat the University of California, Berkeley"
	},

	about: {
		title: "About",
		description:
		"With a passion for problem-solving and analytical thinking, I am eager to continue my journey of discovery and to harness the power of technology to effect change. My studies at the University of California, Berkeley have given me a deep appreciation for the interdisciplinary nature of scientific research and the crucial role data science plays in driving innovation and progress. I am dedicated to using my skills and knowledge to tackle complex challenges and make a meaningful contribution to this field.",
	},

	articles: {
		title: "",
		description: "",
	},

	projects: [
		{
			title: "Personal Portfolio (This Site)",
			description:
				"I created my own personal portfolio using React, HTML/CSS, and Javascript. Adapted from a portfolio template.",
			logo: "react-logo.png",
			linkText: "View Project Repository",
			link: "https://github.com/skompalli/portfolio",
		},

		{
			title: "Diversity Data Analysis Tool",
			description:
				"As part of the Data Discovery Program at UC Berkeley, I was able to coordinate directly with United States Air Force Representatives to build a tool that provides a holistic measure for assessing diversity, equity, and inclusion within the United States Air Force.",
			logo: "/airforce_logo.png",
			linkText: "View Project Poster",
			link: "/article/1",
		},
	],
};

export default INFO;

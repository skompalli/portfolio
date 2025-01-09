import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./styles/card.css";

const Card = (props) => {
	const { icon, title, link , linkText, body} = props;
	return (
		<React.Fragment>
		<div className="card">
			
			<div className="card-container">
				<div className="card-header">
					<div className="card-icon">
						<FontAwesomeIcon icon={icon} />
					</div>
					<Link to={link} target="_blank">
					<div className="card-title">{title}</div>
					</Link>
				</div>
				<div className="card-body">
					<div className="card-text">{body}</div>
				</div>
			</div>
			<div className="project-link-text">{linkText}</div>
		</div>
		</React.Fragment>
	);
};

export default Card;

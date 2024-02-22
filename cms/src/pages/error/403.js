import React from "react";
import
{
	Button,
} from "reactstrap";
import { Link } from "react-router-dom";

import FooterIcon from "../../components/Icons/FooterIcon.js";
import Widget from "../../components/Widget/Widget.js";

const ForbiddenPage = () =>
{
	return (
		<div className="error-box">
			<div className="error-body text-center">
				<h1 className="error-title text-danger">403</h1>
				<h3 className="text-uppercase error-subtitle text-danger">PERMISSION DENIED !</h3>
				<p className="text-muted m-t-30 m-b-30">YOU SEEM TO BE TRYING TO FIND THIS WAY HOME</p>

			</div>
		</div >
	);
}

export default ForbiddenPage;

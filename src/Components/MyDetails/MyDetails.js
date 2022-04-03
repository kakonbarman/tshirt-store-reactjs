import React from "react";
import { Link } from "react-router-dom";

const MyDetails = () => {
	return (
		<div>
			<Link
				className="border border-blue-700 bg-slate-200 py-2 px-8 rounded mx-3"
				to="/about/profile"
			>
				Profile
			</Link>
			<Link to="/about/intrest">Intrest</Link>
			<Link to="/about/personality">Personality</Link>
			<Link to="/about/tour">Tour</Link>
		</div>
	);
};

export default MyDetails;
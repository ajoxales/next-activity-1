import React from "react";

const ButtonComponent = (props) => {
	return (
		<button type="submit" className={`btn ${props.btnColor}`}>
			{props.btnName}
		</button>
	);
};

export default ButtonComponent;

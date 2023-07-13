import React from "react";

const TextboxComponent = (props) => {
	return (
		<>
			<label for={props.id} className="form-label">
				{props.labelName}
			</label>
			<input
				type={props.inputType}
				className="form-control-plaintext border-bottom text-secondary"
				id={props.id}
			/>
		</>
	);
};

export default TextboxComponent;

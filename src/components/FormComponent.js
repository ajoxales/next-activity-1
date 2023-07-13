import React from "react";
import ButtonComponent from "src/components/ButtonComponent";
import TextboxComponent from "src/components/TextboxComponent";

const FormComponent = (props) => {
	return (
		<div className="row justify-content-center mx-3">
			<form className="col-md-6 border rounded bg-transparent p-4 text-white mx-5">
				<div className="d-flex justify-content-center fw-bold fs-3 pb-4">
					{props.formTitle}
				</div>
				<div className="mb-3">
					<TextboxComponent
						labelName="Email Address"
						inputType="email address"
						id="inputEmail"
					/>
				</div>
				<div className="mb-3">
					<TextboxComponent
						labelName="Password"
						inputType="password"
						id="inputPassword"
					/>
				</div>
				<div className="d-flex justify-content-center">
					<ButtonComponent
						btnName="Submit"
						btnColor="btn btn-primary"
					/>
				</div>
			</form>
		</div>
	);
};

export default FormComponent;

import React from "react";
import Image from "next/image";

const ImageComponent = (props) => {
	return (
		<div className="d-flex justify-content-center mx-2">
			<Image src={props.srcImage} alt="code snippet" width={500} />
		</div>
	);
};

export default ImageComponent;

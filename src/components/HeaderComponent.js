import React from "react";
import Image from "next/image";

const HeaderComponent = (props) => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-black py-4 mb-5">
			<div class="container d-flex justify-content-center">
				<Image
					src={props.srcImage}
					alt="nav icon"
					width={30}
					className="mx-2"
				/>
				<span id="title" class="text-light fs-5">
					{props.name}
				</span>
			</div>
		</nav>
	);
};

export default HeaderComponent;

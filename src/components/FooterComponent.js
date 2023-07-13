import React from "react";

const FooterComponent = (props) => {
	return (
		<div id="footer" className="bg-transparent mt-5">
			<div className="container">
				<footer class="d-flex flex-wrap justify-content-between align-items-center py-3">
					<div class="col-md-4 d-flex align-items-center">
						<div class="text-white">{props.name}</div>
					</div>

					<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
						<li class="ms-3">
							<a
								class="text-white-50 icon-link"
								href={props.fbLink}
								target="_blank">
								<i class="bi bi-facebook"></i>
							</a>
						</li>
						<li class="ms-3">
							<a
								class="text-white-50 icon-link"
								href={props.igLink}
								target="_blank">
								<i class="bi bi-instagram"></i>
							</a>
						</li>
						<li class="ms-3">
							<a
								class="text-white-50 icon-link"
								href={props.githubLink}
								target="_blank">
								<i class="bi bi-github"></i>
							</a>
						</li>
					</ul>
				</footer>
			</div>
		</div>
	);
};

export default FooterComponent;

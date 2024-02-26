import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


function Footer(){
    return(
        <>
          <footer className="footer-section">
			<div className="container relative">

				<div className="sofa-img">
					<img src="./src/images/sofa.png" alt="Image" className="img-fluid"/>
				</div>

				<div className="row">
					<div className="col-lg-8">
						<div className="subscription-form">
							<h3 className="d-flex align-items-center"><span className="me-1"><img src="./src/images/envelope-outline.svg" alt="Image" className="img-fluid"/></span><span>Subscribe to Newsletter</span></h3>

							<form action="#" className="row g-3">
								<div className="col-auto">
									<input type="text" className="form-control" placeholder="Enter your name"/>
								</div>
								<div className="col-auto">
									<input type="email" className="form-control" placeholder="Enter your email"/>
								</div>
								<div className="col-auto">
									<button className="btn btn-primary">
										<span className="fa fa-paper-plane"></span>
									</button>
								</div>
							</form>

						</div>
					</div>
				</div>

				<div className="row g-5 mb-5">
					<div className="col-lg-4">
						<div className="mb-4 footer-logo-wrap"><HashLink smooth to="#" className="footer-logo">Furni<span>.</span></HashLink></div>
						<p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

						<ul className="list-unstyled custom-social">
							<li><HashLink smooth to="#"><span className="fa fa-brands fa-facebook-f"></span></HashLink></li>
							<li><HashLink smooth to="#"><span className="fa fa-brands fa-twitter"></span></HashLink></li>
							<li><HashLink smooth to="#"><span className="fa fa-brands fa-instagram"></span></HashLink></li>
							<li><HashLink smooth to="#"><span className="fa fa-brands fa-linkedin"></span></HashLink></li>
						</ul>
					</div>

					<div className="col-lg-8">
						<div className="row links-wrap">
							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><HashLink smooth to="#">About us</HashLink></li>
									<li><HashLink smooth to="#">Services</HashLink></li>
									<li><HashLink smooth to="#">Blog</HashLink></li>
									<li><HashLink smooth to="#">Contact us</HashLink></li>
								</ul>
							</div>

							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><HashLink smooth to="#">Support</HashLink></li>
									<li><HashLink smooth to="#">Knowledge base</HashLink></li>
									<li><HashLink smooth to="#">Live chat</HashLink></li>
								</ul>
							</div>

							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><HashLink smooth to="#">Jobs</HashLink></li>
									<li><HashLink smooth to="#">Our team</HashLink></li>
									<li><HashLink smooth to="#">Leadership</HashLink></li>
									<li><HashLink smooth to="#">Privacy Policy</HashLink></li>
								</ul>
							</div>

							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><HashLink smooth to="#">Nordic Chair</HashLink></li>
									<li><HashLink smooth to="#">Kruzo Aero</HashLink></li>
									<li><HashLink smooth to="#">Ergonomic Chair</HashLink></li>
								</ul>
							</div>
						</div>
					</div>

				</div>

				<div className="border-top copyright">
					<div className="row pt-4">
						<div className="col-lg-6">
							<p className="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <HashLink smooth to="https://untree.co">Untree.co</HashLink> Distributed By <Link to="https://themewagon.com">ThemeWagon</Link>
            </p>
						</div>

						<div className="col-lg-6 text-center text-lg-end">
							<ul className="list-unstyled d-inline-flex ms-auto">
								<li className="me-4"><HashLink smooth to="#">Terms &amp; Conditions</HashLink></li>
								<li><HashLink smooth to="#">Privacy Policy</HashLink></li>
							</ul>
						</div>

					</div>
				</div>

			</div>
		</footer>
        </>
    )

}

export default Footer;
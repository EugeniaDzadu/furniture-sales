import { HashLink } from "react-router-hash-link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import slider from 'react-slick'


function Index(){
    return(
        <>
         <Navbar/>

         <div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Eugenia's Interior <span clsas="d-block">Design Studio</span></h1>
								<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><HashLink to="" className="btn btn-secondary me-2">Shop Now</HashLink><HashLink smooth to="#" className="btn btn-white-outline">Explore</HashLink></p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src="./src/images/couch.png" className="img-fluid"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		

		
		<div className="product-section">
			<div className="container">
				<div className="row">

					
					<div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h2 className="mb-4 section-title">Crafted with excellent material.</h2>
						<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
						<p><Link to="/Shop" className="btn">Explore</Link></p>
					</div> 
					

					
					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<Link className="product-item" to="/Cart">
							<img src="./src/images/product-1.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Nordic Chair</h3>
							<strong className="product-price">$50.00</strong>

							<span className="icon-cross">
								<img src="./src/images/cross.svg" className="img-fluid"/>
							</span>
						</Link>
					</div> 
					
					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<Link className="product-item" to="/Cart">
							<img src="./src/images/product-2.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Kruzo Aero Chair</h3>
							<strong className="product-price">$78.00</strong>

							<span className="icon-cross">
								<img src="./src/images/cross.svg" className="img-fluid"/>
							</span>
						</Link>
					</div>
					
					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<Link className="product-item" href="/Cart">
							<img src="./src/images/product-3.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src="./src/images/cross.svg" className="img-fluid"/>
							</span>
						</Link>
					</div>
					

				</div>
			</div>
		</div>
		

		
		<div className="why-choose-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-6">
						<h2 className="section-title">Why Choose Us</h2>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

						<div className="row my-5">
							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="./src/images/truck.svg" alt="Image" className="imf-fluid"/>
									</div>
									<h3>Fast &amp; Free Shipping</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="./src/images/bag.svg" alt="Image" className="imf-fluid"/>
									</div>
									<h3>Easy to Shop</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="./src/images/support.svg" alt="Image" className="imf-fluid"/>
									</div>
									<h3>24/7 Support</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="./src/images/return.svg" alt="Image" className="imf-fluid"/>
									</div>
									<h3>Hassle Free Returns</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

						</div>
					</div>

					<div className="col-lg-5">
						<div className="img-wrap">
							<img src="./src/images/why-choose-us-img.jpg" alt="Image" className="img-fluid"/>
						</div>
					</div>

				</div>
			</div>
		</div>
		

		<div className="we-help-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-7 mb-5 mb-lg-0">
						<div className="imgs-grid">
							<div className="grid grid-1"><img src="./src/images/img-grid-1.jpg" alt="Untree.co"/></div>
							<div className="grid grid-2"><img src="./src/images/img-grid-2.jpg" alt="Untree.co"/></div>
							<div className="grid grid-3"><img src="./src/images/img-grid-3.jpg" alt="Untree.co"/></div>
						</div>
					</div>
					<div className="col-lg-5 ps-lg-5">
						<h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
						<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>

						<ul className="list-unstyled custom-list my-4">
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
						</ul>
						<p><HashLink smooth to="#" className="btn">Explore</HashLink></p>
					</div>
				</div>
			</div>
		</div>
		
		<div className="popular-product">
			<div className="container">
				<div className="row">

					<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div className="product-item-sm d-flex">
							<div className="thumbnail">
								<img src="./src/images/product-1.png" alt="Image" className="img-fluid"/>
							</div>
							<div className="pt-3">
								<h3>Nordic Chair</h3>
								<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
								<p><HashLink smooth to="#">Read More</HashLink></p>
							</div>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div className="product-item-sm d-flex">
							<div className="thumbnail">
								<img src="./src/images/product-2.png" alt="Image" className="img-fluid"/>
							</div>
							<div className="pt-3">
								<h3>Kruzo Aero Chair</h3>
								<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
								<p><HashLink smooth to="#">Read More</HashLink></p>
							</div>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div className="product-item-sm d-flex">
							<div className="thumbnail">
								<img src="./src/images/product-3.png" alt="Image" className="img-fluid"/>
							</div>
							<div className="pt-3">
								<h3>Ergonomic Chair</h3>
								<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
								<p><HashLink smooth to="#">Read More</HashLink></p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		
		<div className="testimonial-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 mx-auto text-center">
						<h2 className="section-title">Testimonials</h2>
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-12">
						<div className="testimonial-slider-wrap text-center">

							<div id="testimonial-nav">
								<span className="prev" data-controls="prev"><span className="fa fa-chevron-left"></span></span>
								<span className="next" data-controls="next"><span className="fa fa-chevron-right"></span></span>
							</div>

							<div className="testimonial-slider">
								
								<div className="item">
									<div className="row justify-content-center">
										<div className="col-lg-8 mx-auto">

											<div className="testimonial-block text-center">
												<blockquote className="mb-5">
													<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
												</blockquote>

												<div className="author-info">
													<div className="author-pic">
														<img src="./src/images/person-1.png" alt="Maria Jones" className="img-fluid"/>
													</div>
													<h3 className="font-weight-bold">Maria Jones</h3>
													<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
												</div>
											</div>

										</div>
									</div>
								</div> 
								

								<div className="item">
									<div className="row justify-content-center">
										<div className="col-lg-8 mx-auto">

											<div className="testimonial-block text-center">
												<blockquote className="mb-5">
													<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
												</blockquote>

												<div className="author-info">
													<div className="author-pic">
														<img src="./src/images/person-1.png" alt="Maria Jones" className="img-fluid"/>
													</div>
													<h3 className="font-weight-bold">Maria Jones</h3>
													<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
												</div>
											</div>

										</div>
									</div>
								</div> 
							

								<div className="item">
									<div className="row justify-content-center">
										<div className="col-lg-8 mx-auto">

											<div className="testimonial-block text-center">
												<blockquote className="mb-5">
													<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
												</blockquote>

												<div className="author-info">
													<div className="author-pic">
														<img src="./src/images/person-1.png" alt="Maria Jones" className="img-fluid"/>
													</div>
													<h3 className="font-weight-bold">Maria Jones</h3>
													<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
												</div>
											</div>

										</div>
									</div>
								</div> 
								

							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
		

		
		<div className="blog-section">
			<div className="container">
				<div className="row mb-5">
					<div className="col-md-6">
						<h2 className="section-title">Recent Blog</h2>
					</div>
					<div className="col-md-6 text-start text-md-end">
						<HashLink smooth to="#" className="more">View All Posts</HashLink>
					</div>
				</div>

				<div className="row">

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<HashLink smooth to="#" className="post-thumbnail">
                                <img src="./src/images/post-1.jpg" alt="Image" className="img-fluid"/></HashLink>
							<div className="post-content-entry">
								<h3><HashLink smooth to="#">First Time Home Owner Ideas</HashLink></h3>
								<div className="meta">
									<span>by <HashLink smooth to="#">Kristin Watson</HashLink></span> <span>on <HashLink smooth to="#">Dec 19, 2021</HashLink></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<HashLink smooth to="#" className="post-thumbnail"><img src="./src/images/post-2.jpg" alt="Image" className="img-fluid"/></HashLink>
							<div className="post-content-entry">
								<h3><HashLink smooth to="#">How To Keep Your Furniture Clean</HashLink></h3>
								<div className="meta">
									<span>by <HashLink smooth to="#">Robert Fox</HashLink></span> <span>on <HashLink smooth to="#">Dec 15, 2021</HashLink></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<HashLink smooth to="#" className="post-thumbnail"><img src="./src/images/post-3.jpg" alt="Image" className="img-fluid"/></HashLink>
							<div className="post-content-entry">
								<h3><HashLink smooth to="#">Small Space Furniture Apartment Ideas</HashLink></h3>
								<div className="meta">
									<span>by <HashLink smooth to="#">Kristin Watson</HashLink></span> <span>on <HashLink smooth to="#">Dec 12, 2021</HashLink></span>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

        <Footer/>

        </>
    )
}

export default Index;
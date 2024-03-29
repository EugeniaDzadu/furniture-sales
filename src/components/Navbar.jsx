import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


function Navbar(){
    return(
        <>
          <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

           <div className="container">
             <Link className="navbar-brand" to="/">Furni<span>.</span></Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li><Link className="nav-link" to="/Shop">Shop</Link></li>
            <li><Link className="nav-link" to="/About">About us</Link></li>
            <li><Link className="nav-link" to="/Services">Services</Link></li>
            <li><Link className="nav-link" to="/Blog">Blog</Link></li>
            <li><Link className="nav-link" to="/Contact">Contact us</Link></li>
            </ul>

        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li><HashLink className="nav-link" smooth to="#"><img src="./src/images/user.svg"/></HashLink></li>
            <li><Link className="nav-link" to="/Cart"><img src="./src/images/cart.svg"/></Link></li>
        </ul>
    </div>
</div>
    
</nav>

        </>
    )

}

export default Navbar;
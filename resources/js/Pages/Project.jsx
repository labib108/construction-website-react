export default function Project() {
    return (
        <div class="wrapper">
            <div class="top-bar">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-4 col-md-12">
                            <div class="logo">
                                <a href="index.html">
                                    <img src="img/logo.jpg" alt="Logo" />
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-7 d-none d-lg-block">
                            <div class="row">
                                <div class="col-4">
                                    <div class="top-bar-item">
                                        <div class="top-bar-icon">
                                            <i class="flaticon-calendar"></i>
                                        </div>
                                        <div class="top-bar-text">
                                            <h3>Opening Hour</h3>
                                            <p>Mon - Fri, 8:00 - 9:00</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="top-bar-item">
                                        <div class="top-bar-icon">
                                            <i class="flaticon-call"></i>
                                        </div>
                                        <div class="top-bar-text">
                                            <h3>Call Us</h3>
                                            <p>+012 345 6789</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="top-bar-item">
                                        <div class="top-bar-icon">
                                            <i class="flaticon-send-mail"></i>
                                        </div>
                                        <div class="top-bar-text">
                                            <h3>Email Us</h3>
                                            <p>info@labib.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div class="nav-bar">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                        <a href="#" class="navbar-brand">MENU</a>
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav mr-auto">
                                <a href="#" class="nav-item nav-link ">Home</a>
                                <a href="" class="nav-item nav-link">About</a>
                                <a href="" class="nav-item nav-link">Service</a>
                                <a href="" class="nav-item nav-link ">Team</a>
                                <a href="" class="nav-item nav-link active">Project</a>
                                <a href="" class="nav-item nav-link">Blog</a>
                                <a href="" class="nav-item nav-link">Contact</a>
                            </div>
                            <div class="ml-auto">
                                <a class="btn btn-danger" href="#">Get A Quote</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            
            
            <div class="page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2>Our Projects</h2>
                        </div>
                        <div class="col-12">
                            <a href="">Home</a>
                            <a href="">Our Projects</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="portfolio">
                <div class="container">
                    <div class="section-header text-center">
                        <p>Our Projects</p>
                        <h2>Visit Our Projects</h2>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <ul id="portfolio-flters">
                                <li data-filter="*" class="filter-active">All</li>
                                <li data-filter=".first">Complete</li>
                                <li data-filter=".second">Running</li>
                                <li data-filter=".third">Upcoming</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row portfolio-container">
                        <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                            <div class="portfolio-warp">
                                <div class="portfolio-img">
                                    <img src="img/portfolio-1.jpg" alt="Image"/>
                                    <div class="portfolio-overlay">
                                        <p>
                                            Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
                                        </p>
                                    </div>
                                </div>
                                <div class="portfolio-text">
                                    <h3>Project Name</h3>
                                    <a class="btn" href="img/portfolio-1.jpg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item second wow fadeInUp" data-wow-delay="0.2s">
                            <div class="portfolio-warp">
                                <div class="portfolio-img">
                                    <img src="img/portfolio-2.jpg" alt="Image"/>
                                    <div class="portfolio-overlay">
                                        <p>
                                            Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
                                        </p>
                                    </div>
                                </div>
                                <div class="portfolio-text">
                                    <h3>Project Name</h3>
                                    <a class="btn" href="img/portfolio-2.jpg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item third wow fadeInUp" data-wow-delay="0.3s">
                            <div class="portfolio-warp">
                                <div class="portfolio-img">
                                    <img src="img/portfolio-3.jpg" alt="Image"/>
                                    <div class="portfolio-overlay">
                                        <p>
                                            Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
                                        </p>
                                    </div>
                                </div>
                                <div class="portfolio-text">
                                    <h3>Project Name</h3>
                                    <a class="btn" href="img/portfolio-3.jpg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item first wow fadeInUp" data-wow-delay="0.4s">
                            <div class="portfolio-warp">
                                <div class="portfolio-img">
                                    <img src="img/portfolio-4.jpg" alt="Image"/>
                                    <div class="portfolio-overlay">
                                        <p>
                                            Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
                                        </p>
                                    </div>
                                </div>
                                <div class="portfolio-text">
                                    <h3>Project Name</h3>
                                    <a class="btn" href="img/portfolio-4.jpg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
                            <div class="portfolio-warp">
                                <div class="portfolio-img">
                                    <img src="img/portfolio-5.jpg" alt="Image"/>
                                    <div class="portfolio-overlay">
                                        <p>
                                            Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
                                        </p>
                                    </div>
                                </div>
                                <div class="portfolio-text">
                                    <h3>Project Name</h3>
                                    <a class="btn" href="img/portfolio-5.jpg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item third wow fadeInUp" data-wow-delay="0.6s">
                            <div class="portfolio-warp">
                                <div class="portfolio-img">
                                    <img src="img/portfolio-6.jpg" alt="Image"/>
                                    <div class="portfolio-overlay">
                                        <p>
                                            Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
                                        </p>
                                    </div>
                                </div>
                                <div class="portfolio-text">
                                    <h3>Project Name</h3>
                                    <a class="btn" href="img/portfolio-6.jpg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 load-more">
                            <a class="btn" href="#">Load More</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="service">
                <div class="container">
                    <div class="section-header text-center">
                        <p>Our Services</p>
                        <h2>We Provide Services</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="service-item">
                                <div class="service-img">
                                    <img src="img/service-1.jpg" alt="Image"/>
                                    <div class="service-overlay">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                        </p>
                                    </div>
                                </div>
                                <div class="service-text">
                                    <h3>Building Construction</h3>
                                    <a class="btn" href="img/service-1.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div class="service-item">
                                <div class="service-img">
                                    <img src="img/service-2.jpg" alt="Image"/>
                                    <div class="service-overlay">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                        </p>
                                    </div>
                                </div>
                                <div class="service-text">
                                    <h3>House Renovation</h3>
                                    <a class="btn" href="img/service-2.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="service-item">
                                <div class="service-img">
                                    <img src="img/service-3.jpg" alt="Image"/>
                                    <div class="service-overlay">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                        </p>
                                    </div>
                                </div>
                                <div class="service-text">
                                    <h3>Architecture Design</h3>
                                    <a class="btn" href="img/service-3.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div class="service-item">
                                <div class="service-img">
                                    <img src="img/service-4.jpg" alt="Image"/>
                                    <div class="service-overlay">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                        </p>
                                    </div>
                                </div>
                                <div class="service-text">
                                    <h3>Interior Design</h3>
                                    <a class="btn" href="img/service-4.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="service-item">
                                <div class="service-img">
                                    <img src="img/service-5.jpg" alt="Image"/>
                                    <div class="service-overlay">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                        </p>
                                    </div>
                                </div>
                                <div class="service-text">
                                    <h3>Fixing & Support</h3>
                                    <a class="btn" href="img/service-5.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                            <div class="service-item">
                                <div class="service-img">
                                    <img src="img/service-6.jpg" alt="Image"/>
                                    <div class="service-overlay">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                        </p>
                                    </div>
                                </div>
                                <div class="service-text">
                                    <h3>Painting</h3>
                                    <a class="btn" href="img/service-6.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="footer wow fadeIn" data-wow-delay="0.3s">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-lg-3">
                            <div class="footer-contact">
                                <h2>Office Contact</h2>
                                <p><i class="fa fa-map-marker-alt"></i>Sonadanga, Khulna</p>
                                <p><i class="fa fa-phone-alt"></i>+012 345 67890</p>
                                <p><i class="fa fa-envelope"></i>info@labib.com</p>
                                <div class="footer-social">
                                    <a href=""><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-youtube"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="footer-link">
                                <h2>Services Areas</h2>
                                <a href="">Building Construction</a>
                                <a href="">House Renovation</a>
                                <a href="">Architecture Design</a>
                                <a href="">Interior Design</a>
                                <a href="">Painting</a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="footer-link">
                                <h2>Useful Pages</h2>
                                <a href="">About Us</a>
                                <a href="">Contact Us</a>
                                <a href="">Our Team</a>
                                <a href="">Projects</a>
                                <a href="">Testimonial</a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="newsletter">
                                <h2>Newsletter</h2>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu
                                </p>
                                <div class="form">
                                    <input class="form-control" placeholder="Email here"/>
                                    <button class="btn">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container footer-menu">
                    <div class="f-menu">
                        <a href="">Terms of use</a>
                        <a href="">Privacy policy</a>
                        <a href="">Cookies</a>
                        <a href="">Help</a>
                        <a href="">FQAs</a>
                    </div>
                </div>
                <div class="container copyright">
                    <div class="row">
                        <div class="col-md-6">
                            <p>&copy; <a href="#">Construction</a>, All Right Reserved.</p>
                        </div>
                        <div class="col-md-6">
                            <p>Designed By <a href="">LABIB</a></p>
                        </div>
                    </div>
                </div>
            </div>
            

            <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
        </div>
    );
}
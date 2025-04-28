export default function Home() {
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
                                <a href="#" class="nav-item nav-link active">Home</a>
                                <a href="" class="nav-item nav-link">About</a>
                                <a href="" class="nav-item nav-link">Service</a>
                                <a href="" class="nav-item nav-link ">Team</a>
                                <a href="" class="nav-item nav-link">Project</a>
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
            
            
            <div id="carousel" class="carousel slide" data-bs-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-bs-target="#carousel" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#carousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carousel" data-bs-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="img/carousel-1.jpg" class="d-block w-100" alt="Carousel Image" />
                        <div class="carousel-caption">
                            <p class="animated fadeInRight">We Are Professional</p>
                            <h1 class="animated fadeInLeft">For Your Dream Project</h1>
                            <a class="btn btn-danger animated fadeInUp" href="#">Get A Quote</a>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img src="img/carousel-2.jpg" class="d-block w-100" alt="Carousel Image" />
                        <div class="carousel-caption">
                            <p class="animated fadeInRight">Professional Builder</p>
                            <h1 class="animated fadeInLeft">We Build Your Home</h1>
                            <a class="btn btn-danger animated fadeInUp" href="#">Get A Quote</a>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img src="img/carousel-3.jpg" class="d-block w-100" alt="Carousel Image" />
                        <div class="carousel-caption">
                            <p class="animated fadeInRight">We Are Trusted</p>
                            <h1 class="animated fadeInLeft">For Your Dream Home</h1>
                            <a class="btn btn-danger animated fadeInUp" href="#">Get A Quote</a>
                        </div>
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

           
           
            <div class="feature wow fadeInUp" data-wow-delay="0.1s">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-4 col-md-12">
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <i class="flaticon-worker"></i>
                                </div>
                                <div class="feature-text">
                                    <h3>Expert Worker</h3>
                                    <p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12">
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <i class="flaticon-building"></i>
                                </div>
                                <div class="feature-text">
                                    <h3>Quality Work</h3>
                                    <p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12">
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <i class="flaticon-call"></i>
                                </div>
                                <div class="feature-text">
                                    <h3>24/7 Support</h3>
                                    <p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div class="about wow fadeInUp" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5 col-md-6">
                            <div class="about-img">
                                <img src="img/about.jpg" alt="Image"/>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-6">
                            <div class="section-header text-left">
                                <p>Welcome to LABIB construction</p>
                                <h2>25 Years Experience</h2>
                            </div>
                            <div class="about-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                                </p>
                                <a class="btn" href="">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div class="fact">
                <div class="container-fluid">
                    <div class="row counters">
                        <div class="col-md-6 fact-left wow slideInLeft">
                            <div class="row">
                                <div class="col-6">
                                    <div class="fact-icon">
                                        <i class="flaticon-worker"></i>
                                    </div>
                                    <div class="fact-text">
                                        <h2 data-toggle="counter-up">109</h2>
                                        <p>Expert Workers</p>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="fact-icon">
                                        <i class="flaticon-building"></i>
                                    </div>
                                    <div class="fact-text">
                                        <h2 data-toggle="counter-up">485</h2>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 fact-right wow slideInRight">
                            <div class="row">
                                <div class="col-6">
                                    <div class="fact-icon">
                                        <i class="flaticon-address"></i>
                                    </div>
                                    <div class="fact-text">
                                        <h2 data-toggle="counter-up">789</h2>
                                        <p>Completed Projects</p>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="fact-icon">
                                        <i class="flaticon-crane"></i>
                                    </div>
                                    <div class="fact-text">
                                        <h2 data-toggle="counter-up">890</h2>
                                        <p>Running Projects</p>
                                    </div>
                                </div>
                            </div>
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
            
            
            
            <div class="team">
                <div class="container">
                    <div class="section-header text-center">
                        <p>Our Team</p>
                        <h2>Meet Our Engineer</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="img/team-1.jpg" alt="Team Image"/>
                                </div>
                                <div class="team-text">
                                    <h2>Adam Phillips</h2>
                                    <p>CEO & Founder</p>
                                </div>
                                <div class="team-social">
                                    <a class="social-tw" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="social-li" href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="img/team-2.jpg" alt="Team Image"/>
                                </div>
                                <div class="team-text">
                                    <h2>Dylan Adams</h2>
                                    <p>Civil Engineer</p>
                                </div>
                                <div class="team-social">
                                    <a class="social-tw" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="social-li" href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="img/team-3.jpg" alt="Team Image"/>
                                </div>
                                <div class="team-text">
                                    <h2>Jhon Doe</h2>
                                    <p>Interior Designer</p>
                                </div>
                                <div class="team-social">
                                    <a class="social-tw" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="social-li" href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="img/team-4.jpg" alt="Team Image"/>
                                </div>
                                <div class="team-text">
                                    <h2>Josh Dunn</h2>
                                    <p>Painter</p>
                                </div>
                                <div class="team-social">
                                    <a class="social-tw" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="social-li" href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            
            {/* <div class="testimonial wow fadeIn" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="slider-item text-center">
                                            <div class="carousel-nav-item mx-2">
                                                <img src="img/testimonial-1.jpg" class="d-block rounded-circle" alt="Testimonial"/>
                                            </div>
                                            <h3 class="text-white">A Name</h3>
                                            <h4 class="text-white">Profession</h4>
                                            <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi...</p>
                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <div class="slider-item text-center">
                                            <div class="carousel-nav-item mx-2">
                                                <img src="img/testimonial-2.jpg" class="d-block rounded-circle" alt="Testimonial"/>
                                            </div>
                                            <h3 class="text-white">B Name</h3>
                                            <h4 class="text-white">Profession</h4>
                                            <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi...</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="slider-item text-center">
                                            <div class="carousel-nav-item mx-2">
                                                <img src="img/testimonial-3.jpg" class="d-block rounded-circle" alt="Testimonial"/>
                                            </div>
                                            <h3 class="text-white">B Name</h3>
                                            <h4 class="text-white">Profession</h4>
                                            <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi...</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="slider-item text-center">
                                            <div class="carousel-nav-item mx-2">
                                                <img src="img/testimonial-4.jpg" class="d-block rounded-circle" alt="Testimonial"/>
                                            </div>
                                            <h3 class="text-white">B Name</h3>
                                            <h4 class="text-white">Profession</h4>
                                            <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi...</p>
                                        </div>
                                    </div>
                                </div>

                                <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            
            
            <div class="blog">
                <div class="container">
                    <div class="section-header text-center">
                        <p>Latest Blog</p>
                        <h2>Latest From Our Blog</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div class="blog-item">
                                <div class="blog-img">
                                    <img src="img/blog-1.jpg" alt="Image"/>
                                </div>
                                <div class="blog-title">
                                    <h3>Lorem ipsum dolor sit</h3>
                                    <a class="btn" href="">+</a>
                                </div>
                                <div class="blog-meta">
                                    <p>By<a href="">Labib</a></p>
                                    <p>In<a href="">Construction</a></p>
                                </div>
                                <div class="blog-text">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp">
                            <div class="blog-item">
                                <div class="blog-img">
                                    <img src="img/blog-2.jpg" alt="Image"/>
                                </div>
                                <div class="blog-title">
                                    <h3>Lorem ipsum dolor sit</h3>
                                    <a class="btn" href="">+</a>
                                </div>
                                <div class="blog-meta">
                                    <p>By<a href="">Labib</a></p>
                                    <p>In<a href="">Construction</a></p>
                                </div>
                                <div class="blog-text">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div class="blog-item">
                                <div class="blog-img">
                                    <img src="img/blog-3.jpg" alt="Image"/>
                                </div>
                                <div class="blog-title">
                                    <h3>Lorem ipsum dolor sit</h3>
                                    <a class="btn" href="">+</a>
                                </div>
                                <div class="blog-meta">
                                    <p>By<a href="">Labib</a></p>
                                    <p>In<a href="">Construction</a></p>
                                </div>
                                <div class="blog-text">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                                    </p>
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
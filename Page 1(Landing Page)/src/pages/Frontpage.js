import './frontpage.css';
import homeimg from './img/home.jpg';
import logo1 from './img/logo1.png';
import logo2 from './img/logo2.png';
import logo3 from './img/logo3.png';
import logo4 from './img/logo4.png';
import popular1 from "./img/popular1.jpg"
import popular2 from "./img/popular2.jpg"
import popular3 from "./img/popular3.jpg"
import popular4 from "./img/popular4.jpg"
import popular5 from "./img/popular5.jpg"
import {Link} from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import valueimg from "./img/value.jpg";
import contactimg from "./img/x.jpg";

const Frontpage = () => {


    return ( 
        <div>
              
    <main className="main">
        <section className="home section" id="home">
        <Fade>   
            <div className="home__container container grid">
                
                <div className="home__data">
                    <h1 className="home__title">Personalised <br /> Medicare <br />For All</h1>
                    <p className="home__description">
                    Get Personalised Medicare Treatements, Self Diagnosis And Medications.
                    </p>
                    {/* <form action="" className="home__search">
                        <i className='bx bxs-map'></i>
                        <input type="search" placeholder="Search By Location..." className="home__search-input" />
                        <button className="button">Search</button>
                    </form> */}

                    <div className="home__value">
                        <div>
                            <h1 className="home__value-number"> 9K <span>+</span> </h1>
                            <span className="home__value-description"> Trusted <br /> Partners </span>
                        </div>
                        <div>
                            <h1 className="home__value-number"> 2K <span>+</span> </h1>
                            <span className="home__value-description"> Mediactions <br /> Available </span>
                        </div>
                        <div>
                            <h1 className="home__value-number"> 28K <span>+</span> </h1>
                            <span className="home__value-description"> Patients <br /> Treated </span>
                        </div>
                    </div>
                </div>

                <div className="home__images">
                    <div className="home__orbe"></div>
                    <div className="home__img">
                        <img src={homeimg} alt="" />
                        </div>
                </div>
            </div>
            </Fade>
        </section>
        <section className="logos section">
            <Fade>
            <div className="logos__container container grid">
                <div className="logos__img"><img src={logo1} alt="" /></div>
                <div className="logos__img"><img src={logo2} alt="" /></div>
                <div className="logos__img"><img src={logo3} alt="" /></div>
                <div className="logos__img"><img src={logo4} alt="" /></div>
            </div>
            </Fade>
        </section>
        
        <section className="popular section" id="popular">
        <Fade>
            <div className="container">
                <span className="section__subtitle">Our Parteners</span>
                <h2 className="section__title">Afilliated Hospitals<span>.</span></h2>
                <div className="popular__container swiper"> 
                    
                    <div className="swiper-wrapper">
                        <article className="popular__card swiper-slide">
                            <img src={popular1} alt="" className="popular__img" />
                            <div className="popular__data">
                                {/* <h2 className="popular__price"><span>$</span>66,356</h2> */}
                                <h3 className="popular__title">Fortis Hospital</h3>
                                <p className="popular__description"></p>
                            </div>
                        </article>
                        <article className="popular__card swiper-slide">
                            <img src={popular2} alt="" className="popular__img" />
                            <div className="popular__data">
                                {/* <h2 className="popular__price"><span>$</span>35,159</h2> */}
                                <h3 className="popular__title">NHS Services</h3>
                                <p className="popular__description"></p>
                            </div>
                        </article>
                        <article className="popular__card swiper-slide">
                            <img src={popular3} alt="" className="popular__img" />
                            <div className="popular__data">
                                {/* <h2 className="popular__price"><span>$</span>75,043</h2> */}
                                <h3 className="popular__title">Max Healtcare</h3>
                                <p className="popular__description"></p>
                            </div>
                        </article>
                        <article className="popular__card swiper-slide">
                            <img src={popular4} alt="" className="popular__img" />
                            <div className="popular__data">
                                {/* <h2 className="popular__price"><span>$</span>62,024</h2> */}
                                <h3 className="popular__title">Apollo Hosiptal</h3>
                                <p className="popular__description"></p>
                            </div>
                        </article>
                        <article className="popular__card swiper-slide">
                            <img src={popular5} alt="" className="popular__img" />
                            <div className="popular__data">
                                {/* <h2 className="popular__price"><span>$</span>47,043</h2> */}
                                <h3 className="popular__title">Primus Super Speciality</h3>
                                <p className="popular__description"></p>
                            </div>
                        </article>
                    </div>
                    {/* <div className="swiper-button-prev"><i className='bx bx-chevron-left'></i></div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next"><i className='bx bx-chevron-right'></i></div>                    */}
                </div>
            </div>
            </Fade>
        </section>

        <section className="value section" id="value">
            <Fade>
            <div className="value__container container grid">
               
                <div className="value__images">
                    <div className="value__orbe"></div>
                    <div className="value__img">
                        <img src={valueimg} alt="" />
                        </div>
                </div>

                <div className="value__content">
                    <div className="value__data">
                        <span className="section__subtitle">Our Value</span>
                        <h2 className="section__title">Value We Give To You<span>.</span></h2>
                        <p className="value__description">
                        We guarantee the best services for our patients.
                        </p>
                    </div>

                    <div className="value__accordian">

                        <div className="value__accordian-item">
                            <header className="value__accordian-header">
                                <i className='bx bxs-shield-x value__accordian-icon'></i>
                                <h3 className="value__accordian-title">Connect With Best Doctors Near You</h3>
                                <div className="value__accordian-arrow"><i className='bx bxs-down-arrow'></i></div>
                            </header>
                            <div className="value__accordian-content">
                                <p className="value__accordian-description">
                                We guarantee the best services for our patients.
                                </p>
                            </div>
                        </div>
                        <div className="value__accordian-item">
                            <header className="value__accordian-header">
                                <i className='bx bxs-x-square value__accordian-icon'></i>
                                <h3 className="value__accordian-title">Get Online Treatements</h3>
                                <div className="value__accordian-arrow"><i className='bx bxs-down-arrow'></i></div>
                            </header>
                            <div className="value__accordian-content">
                                <p className="value__accordian-description">
                                We guarantee the best services for our patients.
                                </p>
                            </div>
                        </div>
                        <div className="value__accordian-item">
                            <header className="value__accordian-header">
                                <i className='bx bxs-bar-chart-square value__accordian-icon'></i>
                                <h3 className="value__accordian-title">Make Appointments Online</h3>
                                <div className="value__accordian-arrow"><i className='bx bxs-down-arrow'></i></div>
                            </header>
                            <div className="value__accordian-content">
                                <p className="value__accordian-description">
                                We guarantee the best services for our patients.
                                </p>
                            </div>
                        </div>
                        <div className="value__accordian-item">
                            <header className="value__accordian-header">
                                <i className='bx bxs-check-square value__accordian-icon'></i>
                                <h3 className="value__accordian-title">Get Proper Medications</h3>
                                <div className="value__accordian-arrow"><i className='bx bxs-down-arrow'></i></div>
                            </header>
                            <div className="value__accordian-content">
                                <p className="value__accordian-description">
                                We guarantee the best services for our patients.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            </Fade>
        </section>

        <section className="contact section" id="contact">
            <Fade>
            <div className="contact__container container grid">
                <div className="contact__images">
                    <div className="contact__orbe"></div>
                    <div className="contact__img">
                    <img src={contactimg} alt="" />
                    </div>
                </div>
                <div className="contact__content">
                    <div className="contact__data">
                        <span className="section__subtitle">Contact Us</span>
                        <h2 className="section__title">Easy to Contact us<span>.</span></h2>
                        <p className="contact__description">
                            Get consultation from Doctors across the globe.
                            Search for medications in the pharmacies near you.
                        </p>
                    </div>
                    <div className="contact__card">
                        <div className="contact__card-box">
                            <div className="contact__card-info">
                                <i className='bx bxs-phone-call' ></i>
                                <div>
                                    <h3 className="contact__card-title">Call</h3>
                                    <p className="contact__card-description">022.321.165.19</p>
                                </div>
                            </div>
                            <button className="button contact__card-button">Call</button>
                        </div>
                        <div className="contact__card-box">
                            <div className="contact__card-info">
                                <i className='bx bxs-message-dots'></i>
                                <div>
                                    <h3 className="contact__card-title">Chat</h3>
                                    <p className="contact__card-description">022.321.165.19</p>
                                </div>
                            </div>
                            <button className="button contact__card-button">Chat</button>
                        </div>
                        <div className="contact__card-box">
                            <div className="contact__card-info">
                                <i className='bx bxs-video'></i>
                                <div>
                                    <h3 className="contact__card-title">Video Call</h3>
                                    <p className="contact__card-description">022.321.165.19</p>
                                </div>
                            </div>
                            <button className="button contact__card-button">Video Call</button>
                        </div>
                        <div className="contact__card-box">
                            <div className="contact__card-info">
                                <i className='bx bxs-envelope'></i>
                                <div>
                                    <h3 className="contact__card-title">Message</h3>
                                    <p className="contact__card-description">022.321.165.19</p>
                                </div>
                            </div>
                            <button className="button contact__card-button">Message</button>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>
        </section>
        <section className="subscribe section">
            <Fade>
            <div className="subscribe__container container">
                <h1 className="subscribe__title">Get Started with Medicare</h1>
                <p className="subscribe__description">
                    Login to get appointments for personalised treatements at our facilities,
                    get details about nearest pharmacies and more.
                </p>
                <Link to="/" className="button subscribe__button">Get Started</Link>
            </div>
            </Fade>
        </section>
    </main>

    <footer className="footer section">
        <Fade>
        <div className="footer__container container grid">
            <div>
                <Link to="/" className="footer__logo">Medicare<i class='bx bx-plus-medical'></i> </Link>
                <p className="footer__description">
                    Our vision is to provide the best<br /> 
                    treatements available to every patient.
                </p>
            </div>
            <div className="footer__content">
                <div>
                    <h3 className="footer__title">About</h3>
                    <ul className="footer__links">
                        <li><Link to="/" className="footer__link">About Us</Link></li>
                        <li><Link to="/" className="footer__link">Features</Link></li>
                        <li><Link to="/" className="footer__link">News & Blog</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer__title">Company</h3>
                    <ul className="footer__links">
                        <li><Link to="/" className="footer__link">How We Work?</Link></li>
                        <li><Link to="/" className="footer__link">Capital</Link></li>
                        <li><Link to="/" className="footer__link">Security</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer__title">Support</h3>
                    <ul className="footer__links">
                        <li><Link to="/" className="footer__link">FAQs</Link></li>
                        <li><Link to="/" className="footer__link">Support center</Link></li>
                        <li><Link to="/" className="footer__link">Contact Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer__title">Follow us</h3>
                    <ul className="footer__social">
                        <Link to="https://www.instagram.com/" target="_blank" className="footer__social-link"><i className='bx bxl-instagram-alt' ></i></Link>
                        <Link to="https://www.pinterest.com/" target="_blank" className="footer__social-link"><i className='bx bxl-pinterest-alt'></i></Link>
                        <Link to="https://twitter.com/" target="_blank" className="footer__social-link"><i className='bx bxl-twitter' ></i></Link>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer__info container">
            <span className="footer__copy">©️; Medicare. All rights reserved.</span>
            <div className="footer__privacy">
                <Link to="/">Terms & Agreements</Link>
                <Link to="/">Privacy Policy</Link>
            </div>
        </div>
        </Fade>
    </footer>
    

    {/* <Link to="/" className="scrollup" id="scroll-up"><i className='bx bx-chevrons-up'></i></Link>
    <script src="js/scrollreveal.min.js"></script>
    <script src="js/swiper-bundle.min.js"></script>
    <script src="js/main.js"></script> */}
        </div>
     );
}
 
export default Frontpage;
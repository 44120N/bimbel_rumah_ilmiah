import './Footer.css'
import logo_footer from "../assets/putih.svg"
import { useEffect, useState } from 'react';
const Footer = () => {
    const [contact, setContact] = useState("");
    useEffect(() => {
        setContact("+62818588589");
    })
    const wa_url = `https://wa.me/${contact}`;
    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                                <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                                <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                                <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                                <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                                <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="http://scanfcode.com/about/">About Us</a></li>
                                <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                                <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                                <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                                <li><a href="http://scanfcode.com/sitemap/">Nub</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by <a href="#">Rumah Ilmiah</a>; Developed by Zenith Technolgies.</p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="instagram" href="#"><i className="ri-instagram-line"></i></a></li>
                                <li><a className="github" href="#"><i className="ri-github-fill"></i></a></li>
                                <li><a className="discord" href="#"><i className="ri-discord-fill"></i></a></li>
                                <li><a className="linkedin" href="#"><i className="ri-linkedin-box-fill"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <footer className="footer">
                <img src={logo_footer} alt="Logo"/>
                <ul className="social-icon">
                    <li><a href={wa_url}><i className="ri-whatsapp-line"></i></a></li>
                    <li><a href="https://www.youtube.com/watch?v=xvFZjo5PgG0"><i className="ri-instagram-line"></i></a></li>
                </ul>
                <p>© Copyright 2024 | All Rights Reserved</p>
                <p>Rumah Ilmiah</p>
            </footer> */}
        </>
    );
}

export default Footer;
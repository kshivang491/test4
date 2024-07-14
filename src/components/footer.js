// src/pages/Footer.js
import React from 'react';
import '../styles/footer.css'; 
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const Navigate = useNavigate();

    const signupRedirect = (event) => {
        event.preventDefault();
        Navigate("/signup")
    }
    return (
        <footer className='footer-section'>
            <div className="main_footer_container">
                <div className="footer_search_area">
                    <h2>FIND MORE RECIPES!</h2>
                    <form action="">
                        <div className="footer_search">
                            <input type="text" placeholder="Search Your Favourite Recipe"/>
                        </div>
                        <center>
                            <button className="footer_search_button" type="submit">Submit</button>
                        </center>
                    </form>
                </div>
            </div>
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-column">
                        <h3>About Us</h3>
                        <p>
                            Welcome to Delicious Recipes, your number one source for all thing's recipes. We're dedicated to giving you the very best of recipes, with a focus on simplicity, health, and taste.
                        </p>
                    </div>
                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="#">Recipes</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Follow Us</h3>
                        <div className="social-links">
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook" /></a>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" alt="Instagram" /></a>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/9068/9068642.png" alt="Email" /></a>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="Twitter" /></a>
                        </div>
                    </div>
                    <div className="footer-column">
                        <h3>SignUP For Updates</h3>
                        <p>Get the latest recipes right in your inbox!</p>
                        <form className="subscribe-form" onSubmit={signupRedirect}>
                            <input type="email" placeholder="Your email address" />
                            <button type="submit">SignUp</button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Delicious Recipes. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

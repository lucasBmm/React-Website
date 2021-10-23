import { Button } from "./Button";
import './styles/footer.scss'

export function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="toptext">
                    <h2>Join the Adventure newsletter to receive our best vacation deals</h2>
                    <span>You can unsubscribe at any time.</span>
                </div>
                <form>
                    <input type="text" placeholder="Your Email"/>
                    <Button style="btn-navbar" size="btn-medium">
                        Subscribe
                    </Button>
                </form>
                <div className="footer-links">
                    <div className="link-column">
                        <h3>About Us</h3>
                        <a>How it works</a>
                        <a>Testimonials</a>
                        <a>Carees</a>
                        <a>Investors</a>
                        <a>Terms of service</a>
                    </div>
                    <div className="link-column">
                        <h3>Contact Us</h3>
                        <a>Contact</a>
                        <a>Support</a>
                        <a>Destination</a>
                        <a>Sponsorships</a>
                    </div>
                    <div className="link-column">
                        <h3>Videos</h3>
                        <a>Submit Video</a>
                        <a>Ambassadors</a>
                        <a>Agency</a>
                        <a>Influencer</a>
                    </div>
                    <div className="link-column">
                        <h3>Social Media</h3>
                        <a>Instagram</a>
                        <a>Facebook</a>
                        <a>Youtube</a>
                        <a>Twitter</a>
                    </div>
                </div>
                <div className="footer-down">
                    <div className="logo">
                        <span>TRVL<i class="fab fa-react"></i></span>
                        <span>Made by Lucas Bomfim</span>
                    </div>
                    <div className="social-media">
                        <a>
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a>
                        <i class="fab fa-facebook"></i>
                        </a>
                        <a>
                        <i class="fab fa-youtube"></i>
                        </a>
                        <a>
                        <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
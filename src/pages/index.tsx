import React from "react";
import bLinkedLogo from "../../public/landing/bLinkedLogo.svg";
import LogoFooter from "../../public/landing/LogoFooter.png";
import MainImage from "../../public/landing/main-image.png";
import Laptop from "../../public/landing/Laptop.png";
import People from "../../public/landing/People.png";
import Feature1 from "../../public/landing/Feature1.png";
import Feature2 from "../../public/landing/Feature2.png";
import Feature3 from "../../public/landing/Feature3.png";
import Feature4 from "../../public/landing/Feature4.png";
import Feature5 from "../../public/landing/Feature5.png";
import Feature6 from "../../public/landing/Feature6.png";
import Mail from "../../public/landing/mail.png";
import Dribbble from "../../public/landing/Dribbble.png";
import Instagram from "../../public/landing/Instagram.png";
import Twitter from "../../public/landing/Twitter.png";
import Youtube from "../../public/landing/Youtube.png";
import { Dropdown } from "react-bootstrap";
import { CustomToggle } from "../components/CustomToggle";
import { IoMdMenu } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
    return (
        <>
            <header className="apply-old-fonts">
                <Image src={bLinkedLogo} alt="bLinked Logo" />
                <nav className="nav">
                    <Dropdown alignRight>
                        <Dropdown.Toggle as={CustomToggle} id="dropdown-autoclose-true">
                            <div className="filter my-3 my-md-0">
                                <IoMdMenu size={32} />
                            </div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="p-2">
                            <Dropdown.Item className="drop-menu-item" href="/#">
                                About Us
                            </Dropdown.Item>
                            <Dropdown.Item className="drop-menu-item" href="/#">
                                How It Works
                            </Dropdown.Item>
                            <Dropdown.Item className="drop-menu-item" href="/#">
                                FAQs
                            </Dropdown.Item>
                            <Dropdown.Item className="drop-menu-item" href="/login">
                                Log In
                            </Dropdown.Item>
                            <Dropdown.Item className="drop-menu-item" href="/auth/sign_up1">
                                Sign up
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Link href="/#">About Us</Link>
                    <Link href="/#">How It Works</Link>
                    <Link href="/#">FAQs</Link>
                    <Link href="/login">Log In</Link>
                    <button
                        className="button"
                        onClick={() => window.location.assign("/auth/sign_up1")}
                    >
                        Sign up
                    </button>
                </nav>
            </header>

            <main className="apply-old-fonts">
                <section className="first-section">
                    <div className="first-col">
                        <h1 className="title">
                            A market place
                            <br /> for businesses
                        </h1>
                        <p className="text">
                            We make the world of businesses much easier by helping businesses
                            connect with one another.
                        </p>
                        <button
                            className="button"
                            onClick={() => window.location.assign("/auth/sign_up1")}
                        >
                            Get Started
                        </button>
                        <h2 className="title">Built for growth</h2>
                    </div>
                    <div className="second-col">
                        <Image
                            className="image"
                            src={MainImage}
                            alt="Man having a video conference"
                            style={{ height: "auto" }}
                        />
                        <p className="text">
                            An API that provides infrastructure for connecting people and businesses
                            to service providers to ensure accessibility to and of quality services
                            for all.{" "}
                        </p>
                    </div>
                </section>

                <section className="second-section">
                    <h2 className="title">
                        <span>Connecting </span>one <br />
                        business to the other.
                    </h2>
                    <div className="col-row">
                        <div className="first-col">
                            <p className="text">
                                Run your business on simple, useful modern tools and account
                                services that help you get started and grow your business.
                            </p>
                            <button className="button">Merchant</button>
                            <span></span>
                            <button className="button">Service Providers</button>
                            <span></span>
                            <button className="button">Customer</button>
                        </div>
                        <div className="second-col">
                            <Image src={Laptop} alt="Laptop" className="image" />
                        </div>
                    </div>
                </section>

                <section className="third-section">
                    <div className="first-col">
                        <Image
                            src={People}
                            alt="People"
                            className="image"
                            style={{ height: "auto" }}
                        />
                    </div>
                    <div className="second-col">
                        <h2 className="title">
                            Simplified <br />
                            Connections
                        </h2>
                        <p className="text">
                            A framework of large networked connections with different organization
                            having huge existing customer base and also diversity with respect to
                            range of services.
                        </p>
                        <ul className="list">
                            <li className="list-item">Constantly improving</li>
                            <li className="list-item">Built-in services you need for business</li>
                            <li className="list-item">Save time and money</li>
                        </ul>
                        <button
                            className="button"
                            onClick={() => window.location.assign("/auth/sign_up1")}
                        >
                            Get Started
                        </button>
                    </div>
                </section>

                <section className="fourth-section">
                    <h2 className="title">Tailor-made features</h2>
                    <p className="text">
                        Lorem ipsum is common placeholder text used to demonstrate the graphic
                        elements of a document or visual presentation.
                    </p>
                    <div className="features-grid">
                        <div className="feature">
                            <Image src={Feature1} className="image" alt="Feature" />
                            <h4 className="subtitle">Robust workflow</h4>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
                                nibh tristique ipsum.
                            </p>
                        </div>
                        <div className="feature">
                            <Image src={Feature2} className="image" alt="Feature" />
                            <h4 className="subtitle">Flexibility</h4>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
                                nibh tristique ipsum.
                            </p>
                        </div>
                        <div className="feature">
                            <Image src={Feature3} className="image" alt="Feature" />
                            <h4 className="subtitle">User friendly</h4>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
                                nibh tristique ipsum.
                            </p>
                        </div>
                        <div className="feature">
                            <Image src={Feature4} className="image" alt="Feature" />
                            <h4 className="subtitle">Multiple layouts</h4>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
                                nibh tristique ipsum.
                            </p>
                        </div>
                        <div className="feature">
                            <Image src={Feature5} className="image" alt="Feature" />
                            <h4 className="subtitle">Better components</h4>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
                                nibh tristique ipsum.
                            </p>
                        </div>
                        <div className="feature">
                            <Image src={Feature6} className="image" alt="Feature" />
                            <h4 className="subtitle">Well organised</h4>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
                                nibh tristique ipsum.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="fifth-section">
                    <div className="background">
                        <Image src={Mail} alt="Mail" className="image" />
                        <div className="content">
                            <h2 className="title">Join 569 more people in the waitlist</h2>
                            <div className="input-container">
                                <input
                                    type="text"
                                    placeholder="Your email address"
                                    className="input"
                                />
                                <button className="button">Join the waitlist</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="apply-old-fonts">
                <div>
                    <Image src={LogoFooter} alt="Logo" className="logo" />
                    <p className="text">
                        Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac
                        sed turpis volutpat. Cursus sed massa non nisi, placerat.
                    </p>
                    <div className="icons">
                        <div className="icon">
                            <Image src={Instagram} alt="Instagram" />
                        </div>
                        <div className="icon">
                            <Image src={Dribbble} alt="Dribbble" />
                        </div>
                        <div className="icon">
                            <Image src={Twitter} alt="Twitter" />
                        </div>
                        <div className="icon">
                            <Image src={Youtube} alt="Youtube" />
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="subtitle">Company</h4>
                    <Link className="text" href="/#">
                        Home
                    </Link>
                    <br />
                    <Link className="text" href="/#">
                        Blogs
                    </Link>
                    <br />
                    <Link className="text" href="/#">
                        About
                    </Link>
                    <br />
                    <Link className="text" href="/#">
                        Carreers
                    </Link>
                    <br />
                </div>
                <div>
                    <h4 className="subtitle">Legal</h4>
                    <Link className="text" href="/#">
                        Terms & Conditions
                    </Link>
                    <br />
                    <Link className="text" href="/#">
                        Privacy Policy
                    </Link>
                    <br />
                </div>
                <div>
                    <h4 className="subtitle">Reach Us</h4>
                    <p className="text">hello@landify.co</p>
                    <p className="text">+91 98765 43210</p>
                    <p className="text">772 Lyonwood Ave Walnut, CA 91789</p>
                </div>
                <div className="bottom">
                    <p className="text">© 2020 Landify UI Kit. All rights reserved</p>
                    <div className="links">
                        <Link className="text" href="/#">
                            Terms & Conditions
                        </Link>
                        <Link className="text" href="/#">
                            Privacy Policy
                        </Link>
                        <Link className="text" href="/#">
                            Sitemap
                        </Link>
                        <Link className="text" href="/#">
                            Disclaimer
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}

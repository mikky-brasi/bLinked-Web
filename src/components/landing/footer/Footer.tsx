import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import logo from "./logo.png";
import Dribbble from "./dribbble.png";
import Instagram from "./instagram.png";
import Twitter from "./twitter.png";
import Youtube from "./youtube.png";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.section}>
                <Image src={logo} alt="Logo" className={styles.logo} />

                <p className={styles.text}>
                    Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed
                    turpis volutpat. Cursus sed massa non nisi, placerat.
                </p>

                <div className={styles.icons}>
                    <div className={styles.icon}>
                        <Image src={Instagram} alt="Instagram" />
                    </div>

                    <div className={styles.icon}>
                        <Image src={Dribbble} alt="Dribbble" />
                    </div>

                    <div className={styles.icon}>
                        <Image src={Twitter} alt="Twitter" />
                    </div>

                    <div className={styles.icon}>
                        <Image src={Youtube} alt="Youtube" />
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h4 className={styles.subtitle}>Company</h4>
                <Link className={styles.text} href="/#">
                    Home
                </Link>
                <br />
                <Link className={styles.text} href="/#">
                    Blogs
                </Link>
                <br />
                <Link className={styles.text} href="/#">
                    About
                </Link>
                <br />
                <Link className={styles.text} href="/#">
                    Carreers
                </Link>
                <br />
            </div>

            <div className={styles.section}>
                <h4 className={styles.subtitle}>Legal</h4>
                <Link className={styles.text} href="/#">
                    Terms & Conditions
                </Link>
                <br />
                <Link className={styles.text} href="/#">
                    Privacy Policy
                </Link>
                <br />
            </div>

            <div className={styles.section}>
                <h4 className={styles.subtitle}>Reach Us</h4>
                <p className={styles.text}>hello@landify.co</p>
                <p className={styles.text}>+91 98765 43210</p>
                <p className={styles.text}>772 Lyonwood Ave Walnut, CA 91789</p>
            </div>

            <div className={styles.bottomSection}>
                <p className={styles.text}>© 2020 Landify UI Kit. All rights reserved</p>

                <div className={styles.links}>
                    <Link className={styles.text} href="/#">
                        Terms & Conditions
                    </Link>
                    <Link className={styles.text} href="/#">
                        Privacy Policy
                    </Link>
                    <Link className={styles.text} href="/#">
                        Sitemap
                    </Link>
                    <Link className={styles.text} href="/#">
                        Disclaimer
                    </Link>
                </div>
            </div>
        </footer>
    );
}

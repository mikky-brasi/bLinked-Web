import Image from "next/image";
import MainImage from "./image.png";
import styles from "./Section1.module.scss";
import landingStyles from "../landing.module.scss";
import classNames from "classnames";

export function Section1() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.firstCol}>
                <h1 className={classNames(landingStyles.title, styles.title)}>
                    A market place
                    <br /> for businesses
                </h1>

                <p className={classNames(landingStyles.text, styles.text)}>
                    We make the world of businesses much easier by helping businesses connect with
                    one another.
                </p>

                <button
                    className={styles.button}
                    onClick={() => window.location.assign("/auth/sign_up1")}
                >
                    Get Started
                </button>

                <h2 className={classNames(landingStyles.title, styles.title)}>Built for growth</h2>
            </div>

            <div className={styles.secondCol}>
                <Image
                    className={styles.image}
                    src={MainImage}
                    alt="Man having a video conference"
                    style={{ height: "auto" }}
                />

                <p className={classNames(landingStyles.text, styles.text)}>
                    An API that provides infrastructure for connecting people and businesses to
                    service providers to ensure accessibility to and of quality services for all.{" "}
                </p>
            </div>
        </section>
    );
}

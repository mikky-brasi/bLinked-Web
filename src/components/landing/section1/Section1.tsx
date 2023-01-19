import Image from "next/image";
import MainImage from "./image.png";
import styles from "./Section1.module.scss";

export function Section1() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.firstCol}>
                <h1 className={styles.title}>
                    A market place
                    <br /> for businesses
                </h1>

                <p className={styles.text}>
                    We make the world of businesses much easier by helping businesses connect with
                    one another.
                </p>

                <button
                    className={styles.button}
                    onClick={() => window.location.assign("/auth/sign_up1")}
                >
                    Get Started
                </button>

                <h2 className={styles.title}>Built for growth</h2>
            </div>

            <div className={styles.secondCol}>
                <Image
                    className={styles.image}
                    src={MainImage}
                    alt="Man having a video conference"
                    style={{ height: "auto" }}
                />

                <p className={styles.text}>
                    An API that provides infrastructure for connecting people and businesses to
                    service providers to ensure accessibility to and of quality services for all.{" "}
                </p>
            </div>
        </section>
    );
}

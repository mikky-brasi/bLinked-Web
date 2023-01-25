import Image from "next/image";
import styles from "./Section5.module.scss";
import mail from "./mail.png";
import landingStyles from "../landing.module.scss";
import classNames from "classnames";

export function Section5() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.background}>
                <Image src={mail} alt="Mail" className={styles.image} />

                <div className={styles.content}>
                    <h2 className={classNames(landingStyles.title, styles.title)}>
                        Join 569 more people in the waitlist
                    </h2>

                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            placeholder="Your email address"
                            className={styles.input}
                        />
                        <button className={styles.button}>Join the waitlist</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

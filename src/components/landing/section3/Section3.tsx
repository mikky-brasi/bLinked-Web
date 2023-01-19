import Image from "next/image";
import styles from "./Section3.module.scss";
import People from "./people.png";

export function Section3() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.firstCol}>
                <Image src={People} alt="People" className={styles.image} />
            </div>

            <div className={styles.secondCol}>
                <h2 className={styles.title}>
                    Simplified <br />
                    Connections
                </h2>
                <p className={styles.text}>
                    A framework of large networked connections with different organization having
                    huge existing customer base and also diversity with respect to range of
                    services.
                </p>

                <ul className={styles.list}>
                    <li className={styles.listItem}>Constantly improving</li>
                    <li className={styles.listItem}>Built-in services you need for business</li>
                    <li className={styles.listItem}>Save time and money</li>
                </ul>

                <button
                    className={styles.button}
                    onClick={() => window.location.assign("/auth/sign_up1")}
                >
                    Get Started
                </button>
            </div>
        </section>
    );
}

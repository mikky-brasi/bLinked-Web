import Image from "next/image";
import laptop from "./laptop.png";
import styles from "./Section2.module.scss";

export function Section2() {
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>
                <span className={styles.titleAccent}>Connecting </span>one <br />
                business to the other.
            </h2>

            <div className={styles.colRow}>
                <div className={styles.firstCol}>
                    <p className={styles.text}>
                        Run your business on simple, useful modern tools and account services that
                        help you get started and grow your business.
                    </p>

                    <button className={styles.button}>Merchant</button>

                    <span className={styles.divider} />

                    <button className={styles.button}>Service Providers</button>

                    <span className={styles.divider} />

                    <button className={styles.button}>Customer</button>
                </div>

                <div className={styles.secondCol}>
                    <Image src={laptop} alt="Laptop" className={styles.image} />
                </div>
            </div>
        </section>
    );
}

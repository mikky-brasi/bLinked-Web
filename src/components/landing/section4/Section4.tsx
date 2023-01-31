import Image from "next/image";
import styles from "./Section4.module.scss";
import Feature1 from "./feature1.png";
import Feature2 from "./feature2.png";
import Feature3 from "./feature3.png";
import Feature4 from "./feature4.png";
import Feature5 from "./feature5.png";
import Feature6 from "./feature6.png";
import landingStyles from "../landing.module.scss";
import classNames from "classnames";

export function Section4() {
    return (
        <section className={styles.wrapper}>
            <h2 className={classNames(landingStyles.title, styles.title)}>Tailor-made features</h2>
            <p className={classNames(landingStyles.text, styles.text)}>
                Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a
                document or visual presentation.
            </p>
            <div className={styles.featuresGrid}>
                <div className={styles.feature}>
                    <Image src={Feature1} className={styles.image} alt="Feature" />
                    <h4 className={styles.subtitle}>Robust workflow</h4>
                    <p className={classNames(landingStyles.text, styles.text)}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
                        tristique ipsum.
                    </p>
                </div>
                <div className={styles.feature}>
                    <Image src={Feature2} className={styles.image} alt="Feature" />
                    <h4 className={styles.subtitle}>Flexibility</h4>
                    <p className={classNames(landingStyles.text, styles.text)}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
                        tristique ipsum.
                    </p>
                </div>
                <div className={styles.feature}>
                    <Image src={Feature3} className={styles.image} alt="Feature" />
                    <h4 className={styles.subtitle}>User friendly</h4>
                    <p className={classNames(landingStyles.text, styles.text)}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
                        tristique ipsum.
                    </p>
                </div>
                <div className={styles.feature}>
                    <Image src={Feature4} className={styles.image} alt="Feature" />
                    <h4 className={styles.subtitle}>Multiple layouts</h4>
                    <p className={classNames(landingStyles.text, styles.text)}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
                        tristique ipsum.
                    </p>
                </div>
                <div className={styles.feature}>
                    <Image src={Feature5} className={styles.image} alt="Feature" />
                    <h4 className={styles.subtitle}>Better components</h4>
                    <p className={classNames(landingStyles.text, styles.text)}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
                        tristique ipsum.
                    </p>
                </div>
                <div className={styles.feature}>
                    <Image src={Feature6} className={styles.image} alt="Feature" />
                    <h4 className={styles.subtitle}>Well organised</h4>
                    <p className={classNames(landingStyles.text, styles.text)}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
                        tristique ipsum.
                    </p>
                </div>
            </div>
        </section>
    );
}

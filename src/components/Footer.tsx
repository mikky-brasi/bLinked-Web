import classNames from "classnames";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={classNames(styles.wrapper, "mt-4")}>
            <div className={styles.contentA}>
                Need help? <span className={styles.contentALink}>Contact support</span>
            </div>
            <div className={styles.contentB}>
                <div>Terms & Conditions</div>
                <div className="mx-2">|</div>
                <div>Privacy Policy</div>
            </div>
        </div>
    );
};

export default Footer;

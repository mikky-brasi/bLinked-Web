import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import { logo, lock } from "../../../public/img";
import Footer from "../../components/Footer";
import authStyles from "@/styles/shared/auth.module.scss";
import styles from "@/styles/pages/PasswordReset.module.scss";
import classNames from "classnames";

const PasswordReset = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/home");
    };

    return (
        <div className={authStyles.wrapper}>
            <div className={classNames(authStyles.main, "container")}>
                <Image src={logo} alt="Logo" className="img-fluid my-5" />
                <div className={classNames(authStyles.subContainer, "px-md-5 py-5")}>
                    <div className={classNames(styles.icon, "mb-5")}>
                        <div>
                            <Image src={lock} alt="Lock" className="img-fluid" />
                        </div>
                    </div>
                    <div className={authStyles.title}>Password reset successful!</div>
                    <div className="row justify-content-center">
                        <div className={classNames(authStyles.subtitle, "px-5")}>
                            The password for your bLinked account has been successful reset
                        </div>
                    </div>

                    <div
                        className={classNames(
                            authStyles.button,
                            "row justify-content-center px-md-5 px-4 mt-5",
                        )}
                    >
                        <button className="w-100" onClick={handleClick}>
                            Continue to your workspace
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default PasswordReset;

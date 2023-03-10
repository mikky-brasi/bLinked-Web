import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import validator from "validator";

import { logo, validemail } from "../../../public/img";
import Footer from "../../components/Footer";
import authStyles from "@/styles/shared/auth.module.scss";

const ForgotEmailScreen = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const inputFocus = () => setEmailFocus(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setEmail(value);

        if (!value) return setEmailErr(true);

        if (typeof value !== "undefined") {
            const lastAtPos = value.lastIndexOf("@");
            const lastDotPos = value.lastIndexOf(".");
            const validEmail =
                lastAtPos < lastDotPos &&
                lastAtPos > 0 &&
                value.indexOf("@@") === -1 &&
                lastDotPos > 2 &&
                value.length - lastDotPos > 2;

            if (!validEmail) return setEmailErr(true);
        }
        return setEmailErr(false);
    };

    const handleSendLink = () => {
        if (!validator.isEmail(email)) {
            setEmailErr(true);
        } else {
            setEmailErr(false);
            router.push("/auth/otp");
        }
    };

    const handleLogin = () => {
        router.push("/");
    };

    return (
        <div className={authStyles.wrapper}>
            <div className={classNames(authStyles.main, "container")}>
                <Image src={logo} alt="Logo" className="img-fluid my-5" />
                <div className={classNames(authStyles.subContainer, "px-md-5 py-5")}>
                    <div className={authStyles.title}>Forget password, 🔐</div>
                    <div className="row justify-content-center">
                        <div className={classNames(authStyles.subtitle, "col-md-7")}>
                            Enter your email address and we’ll email you a link to reset your
                            password.
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div
                            className={classNames(
                                authStyles.inputContainer,
                                "col-lg-12 px-4 mt-md-4 mt-4 fotgot-pass-border",
                            )}
                        >
                            <div
                                className={
                                    emailFocus
                                        ? emailErr
                                            ? "input-box active w-100 forgot-email-border"
                                            : "input-box active w-100"
                                        : emailErr
                                        ? "input-box w-100 forgot-email-border"
                                        : "input-box w-100"
                                }
                            >
                                <div className={!validator.isEmail(email) ? "d-none" : ""}>
                                    <Image
                                        src={validemail}
                                        alt="Valid Email"
                                        className="img-fluid"
                                    />
                                </div>
                                <label>Email address</label>
                                <input
                                    type="text"
                                    className="w-100"
                                    name="email"
                                    value={email}
                                    onFocus={() => inputFocus()}
                                    onChange={handleChange}
                                    onBlur={() => {
                                        if (!email) {
                                            setEmailFocus(false);
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            className={
                                emailErr ? "col-lg-12 text-start px-4 forgot-email-err" : "d-none"
                            }
                        >
                            Enter a valid email address
                        </div>
                    </div>

                    <div className={classNames(authStyles.button, "px-2 mt-5")}>
                        <button className="w-100" onClick={handleSendLink}>
                            Send link
                        </button>
                    </div>

                    <div className={classNames(authStyles.signIn, "mt-4")}>
                        Take me back to<span onClick={handleLogin}> Login</span>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default ForgotEmailScreen;

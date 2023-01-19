import React, { useState } from "react";
import { useRouter } from "next/router";
import validator from "validator";
// Assets
import { validemail } from "../../../public/img";
import { eye, hiddenEye } from "../../../public/img";
import bLinkedLogo from "../../../public/landing/bLinkedLogo.svg";
// Components
import Footer from "../../components/Footer";
import Image from "next/image";
import styles from "@/styles/pages/SignUp.module.scss";
import classNames from "classnames";

const SignUpPage1 = () => {
    const router = useRouter();

    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
    });

    const [userErr, setUserErr] = useState({
        fname: false,
        lname: false,
        email: false,
        password: false,
    });

    const [userFocus, setUserFocus] = useState({
        fname: false,
        lname: false,
        email: false,
        password: false,
    });

    const [passwordType, setPasswordType] = useState("password");

    const inputFocus = (name: string) => {
        setUserFocus({
            ...userFocus,
            [name]: true,
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });

        if (!value) return setUserErr({ ...userErr, [name]: true });
        if (name === "password" && !validator.isStrongPassword(value))
            return setUserErr({ ...userErr, [name]: true });

        if (typeof value !== "undefined" && name === "email") {
            const lastAtPos = value.lastIndexOf("@");
            const lastDotPos = value.lastIndexOf(".");
            const validEmail =
                lastAtPos < lastDotPos &&
                lastAtPos > 0 &&
                value.indexOf("@@") === -1 &&
                lastDotPos > 2 &&
                value.length - lastDotPos > 2;

            if (!validEmail) return setUserErr({ ...userErr, [name]: true });
        }
        return setUserErr({ ...userErr, [name]: false });
    };

    const handlePassType = () =>
        passwordType === "password" ? setPasswordType("text") : setPasswordType("password");

    const handleSignup = () => {
        const { fname, lname, email, password } = user;
        if (!fname && !userErr.fname) return setUserErr({ ...userErr, fname: true });
        if (!lname && !userErr.lname) return setUserErr({ ...userErr, lname: true });
        if (!email && !userErr.email) return setUserErr({ ...userErr, email: true });
        if (!password && !userErr.password) return setUserErr({ ...userErr, password: true });
        if (Object.values(userErr).some((value) => value)) return;
        return router.push("/auth/sign_up2");
    };

    const handleLogin = () => router.push("/login");

    return (
        <div className={styles.wrapper}>
            <div className="container auth-cmn-main">
                <Image
                    src={bLinkedLogo}
                    alt="Logo"
                    className="img-fluid"
                    style={{ maxHeight: "150px" }}
                />
                <div className={classNames("px-md-5 py-5", styles.subContainer)}>
                    <div className={styles.title}>Let’s get you started 👇🏽</div>
                    <div className={styles.subtitle}>First of, let’s get to know you</div>

                    <div className="row martop-32">
                        <div className="col-lg-6  auth-input-container">
                            <div
                                className={
                                    userFocus.fname
                                        ? "input-box active w-100"
                                        : userErr.fname
                                        ? "input-box w-100 forgot-email-border"
                                        : "input-box w-100"
                                }
                            >
                                <label>First name</label>
                                <input
                                    type="text"
                                    className="w-100"
                                    name="fname"
                                    value={user.fname}
                                    onFocus={() => inputFocus("fname")}
                                    onChange={handleChange}
                                    onBlur={() => {
                                        if (!user.fname) {
                                            setUserFocus({
                                                ...userFocus,
                                                fname: false,
                                            });
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6  auth-input-container">
                            <div
                                className={
                                    userFocus.lname
                                        ? "input-box active w-100"
                                        : userErr.lname
                                        ? "input-box w-100 forgot-email-border"
                                        : "input-box w-100"
                                }
                            >
                                <label>Last name</label>
                                <input
                                    type="text"
                                    className="w-100"
                                    name="lname"
                                    value={user.lname}
                                    onFocus={() => inputFocus("lname")}
                                    onChange={handleChange}
                                    onBlur={() => {
                                        if (!user.lname) {
                                            setUserFocus({
                                                ...userFocus,
                                                lname: false,
                                            });
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 martop-32 auth-input-container">
                            <div
                                className={
                                    userFocus.email
                                        ? userErr.email
                                            ? "input-box active w-100 forgot-email-border"
                                            : "input-box active w-100"
                                        : userErr.email
                                        ? "input-box w-100 forgot-email-border"
                                        : "input-box w-100"
                                }
                            >
                                <div className={!validator.isEmail(user.email) ? "d-none" : ""}>
                                    <Image
                                        src={validemail}
                                        alt="Valid Email"
                                        className="img-fluid"
                                    />
                                </div>
                                <label>Email</label>
                                <input
                                    type="text"
                                    className="w-100"
                                    name="email"
                                    value={user.email}
                                    onFocus={() => inputFocus("email")}
                                    onChange={handleChange}
                                    onBlur={() => {
                                        if (!user.email) {
                                            setUserFocus({
                                                ...userFocus,
                                                email: false,
                                            });
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            className={
                                userErr.email
                                    ? "col-lg-12 text-start px-4 forgot-email-err"
                                    : "d-none"
                            }
                        >
                            Enter a valid email address
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 martop-32 auth-input-container">
                            <div
                                className={
                                    userFocus.password
                                        ? userErr.password
                                            ? "input-box active w-100 forgot-email-border"
                                            : "input-box active w-100"
                                        : userErr.password
                                        ? "input-box w-100 forgot-email-border"
                                        : "input-box w-100"
                                }
                            >
                                <div>
                                    <Image
                                        src={passwordType === "password" ? eye : hiddenEye}
                                        alt="Eye"
                                        className={classNames("img-fluid", styles.pointer)}
                                        onClick={handlePassType}
                                    />
                                </div>
                                <label>Create password</label>
                                <input
                                    type={passwordType}
                                    className="w-100"
                                    name="password"
                                    value={user.password}
                                    onFocus={() => inputFocus("password")}
                                    onChange={handleChange}
                                    onBlur={() => {
                                        if (!user.password) {
                                            setUserFocus({
                                                ...userFocus,
                                                password: false,
                                            });
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            className={
                                userErr.password
                                    ? "col-lg-12 text-start px-4 forgot-email-err"
                                    : "d-none"
                            }
                        >
                            Enter a strong password containing at least 8 characters with 1 lower
                            case letter, 1 upper case letter, 1 number and 1 special character
                        </div>
                    </div>

                    <div className={classNames("my-4", styles.termsCondition)}>
                        By clicking on the Continue button you agree with our
                        <span>
                            {" "}
                            Terms <br />& Conditions
                        </span>{" "}
                        and <span>Privacy Policy</span>
                    </div>

                    <div className={classNames("px-2", styles.button)}>
                        <button className="w-100" onClick={handleSignup}>
                            Continue
                        </button>
                    </div>

                    <div className={classNames("mt-4", styles.signIn)}>
                        Already have an account yet? <span onClick={handleLogin}>Sign in</span>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default SignUpPage1;

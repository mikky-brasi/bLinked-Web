import React, { useState } from "react";
import { useRouter } from "next/router";
import validator from "validator";
import {
    google,
    eye,
    hiddenEye,
    partical,
    partical2,
    partical3,
    partical4,
    partical5,
    loginVectorA,
    validemail,
} from "../../public/img";
import bLinkedLogo from "../../public/landing/bLinkedLogo.svg";
import { useGoogleLoginHandler } from "../modules/google-oauth/useGoogleLoginHandler";
import Image from "next/image";

const SignInPage = () => {
    const router = useRouter();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [userErr, setUserErr] = useState({
        email: false,
        password: false,
    });

    const [userFocus, setUserFocus] = useState({
        email: false,
        password: false,
    });

    const [passwordType, setPasswordType] = useState("password");

    const inputFocus = (name: string) => setUserFocus({ ...userFocus, [name]: true });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });

        if (!value) return setUserErr({ ...userErr, [name]: true });

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

    const handleLogin = () => {
        const { email, password } = user;
        if (!password) return setUserErr({ ...userErr, password: true });
        if (!email) return setUserErr({ ...userErr, email: true });
        if (userErr.email || userErr.password) return;

        localStorage.setItem("accessToken", email);
        router.push("/home");
    };

    const handleForgot = () => router.push("/auth/forgot_password");

    const handleCreateAC = () => router.push("/auth/sign_up1");

    const handleGoogleLogin = useGoogleLoginHandler?.();

    return (
        <div className="auth-main apply-old-fonts">
            <div className="row w-100">
                <div className="col-lg-8 signin-comp-a">
                    <div className="d-flex justify-content-center">
                        <Image
                            src={bLinkedLogo}
                            alt="Logo"
                            className="img-fluid"
                            style={{ maxHeight: "150px" }}
                        />
                    </div>
                    <div className="signin-title">Welcome back to bLinked, 👏🏽</div>
                    <div className="signin-subcontainer px-md-5 mt-5">
                        <div className="signin-with-google px-md-3">
                            <div className="shadow-sm">
                                <Image src={google} alt="" />
                            </div>

                            <button
                                className="w-100"
                                onClick={handleGoogleLogin}
                                disabled={!handleGoogleLogin}
                            >
                                Sign in with Google
                            </button>
                        </div>

                        <div className="signin-with-email">
                            <div></div>
                            <div className="mx-4">Or, sign in with your email</div>
                            <div></div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 auth-input-container">
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
                            <div className="col-lg-12 auth-input-container">
                                <div
                                    className={
                                        userFocus.password
                                            ? "input-box active w-100"
                                            : userErr.password
                                            ? "input-box w-100 forgot-email-border"
                                            : "input-box w-100"
                                    }
                                >
                                    <div>
                                        <Image
                                            src={passwordType === "password" ? eye : hiddenEye}
                                            alt="Eye"
                                            className="img-fluid pointer"
                                            onClick={handlePassType}
                                        />
                                    </div>
                                    <label>Password</label>
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
                        </div>

                        <div className="signin-with-email-btn px-md-3">
                            <button className="w-100" onClick={handleLogin}>
                                Log in
                            </button>
                        </div>
                        <div className="signin-forgot-password px-3" onClick={handleForgot}>
                            Forgot your password?
                        </div>
                        <div className="signin-create-ac mt-4 px-3">
                            Don’t have an account yet?{" "}
                            <span onClick={handleCreateAC}>Create account</span>
                        </div>
                        <div className="signin-footer px-3 mb-5">
                            <div>Help</div>
                            <div>Terms & Conditions</div>
                            <div>Privacy Policy</div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 px-5 py-5 signin-comp-b">
                    <div>
                        <div>
                            <Image src={partical5} alt="" className="img-fluid" />
                        </div>
                        <div className="signin-comp-b-title mt-5">
                            Sell fast, sell more - grow your business.
                        </div>
                        <p className="signin-comp-b-desc mt-4">
                            Manage your inventory accross multiple sales channels, collect all types
                            of payments and analyze your sales with one tool.
                        </p>
                    </div>

                    <div className="signin-vector">
                        <div>
                            <Image src={loginVectorA} alt="Login" className="img-fluid" />
                        </div>
                        <div>
                            <Image src={partical} alt="" className="img-fluid" />
                        </div>
                        <div>
                            <Image src={partical2} alt="" className="img-fluid" />
                        </div>
                        <div>
                            <Image src={partical3} alt="" className="img-fluid" />
                        </div>
                        <div>
                            <Image src={partical4} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;

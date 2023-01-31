import React, { useState } from "react";
import { useRouter } from "next/router";
import validator from "validator";
// Assets
import { validemail } from "../../../public/img";
import bLinkedLogo from "../../../public/img/bLinkedLogo.svg";
// Components
import Footer from "../../components/Footer";
import Image from "next/image";
import authStyles from "@/styles/shared/auth.module.scss";
import classNames from "classnames";

const SignUpPage2 = () => {
    const router = useRouter();

    const [cmp, setCmp] = useState({
        cname: "",
        cemail: "",
        cphone: "",
    });

    const [cmpErr, setCmpErr] = useState({
        cname: false,
        cemail: false,
        cphone: false,
    });

    const [cmpFocus, setCmpFocus] = useState({
        cname: false,
        cemail: false,
        cphone: false,
    });

    const inputFocus = (name: string) => setCmpFocus({ ...cmpFocus, [name]: true });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCmp({ ...cmp, [name]: value });
        if (!value) return setCmpErr({ ...cmpErr, [name]: true });

        if (typeof value !== "undefined" && name === "cemail") {
            const lastAtPos = value.lastIndexOf("@");
            const lastDotPos = value.lastIndexOf(".");
            const validEmail =
                lastAtPos < lastDotPos &&
                lastAtPos > 0 &&
                value.indexOf("@@") === -1 &&
                lastDotPos > 2 &&
                value.length - lastDotPos > 2;

            if (!validEmail) return setCmpErr({ ...cmpErr, [name]: true });
        }
        return setCmpErr({ ...cmpErr, [name]: false });
    };

    const handleSignUp = () => {
        const { cname, cphone, cemail } = cmp;
        if (!cname) return setCmpErr({ ...cmpErr, cname: true });
        if (!cemail) return setCmpErr({ ...cmpErr, cemail: true });
        if (!cphone) return setCmpErr({ ...cmpErr, cphone: true });
        if (cmpErr.cname) return;
        localStorage.setItem("accessToken", cemail);
        return router.push("/home");
    };

    const handleLogin = () => router.push("/login");

    return (
        <div className={authStyles.wrapper}>
            <div className={classNames(authStyles.main, "container")}>
                <Image
                    src={bLinkedLogo}
                    alt="Logo"
                    className="img-fluid"
                    style={{ maxHeight: "150px" }}
                />
                <div className={classNames(authStyles.subContainer, "px-md-5 py-5")}>
                    <div className={authStyles.title}>It{"'"}s time to Grow your Business,</div>
                    <div className={authStyles.subtitle}>
                        You’re almost there! Quickly tell us about your business{" "}
                    </div>

                    <div className="row mt-4">
                        <div
                            className={classNames(authStyles.inputContainer, "col-lg-12 martop-32")}
                        >
                            <div
                                className={
                                    cmpFocus.cname
                                        ? "input-box active w-100"
                                        : cmpErr.cname
                                        ? "input-box w-100 forgot-email-border"
                                        : "input-box w-100"
                                }
                            >
                                <label>Company name</label>
                                <input
                                    type="text"
                                    className="w-100"
                                    name="cname"
                                    value={cmp.cname}
                                    onFocus={() => inputFocus("cname")}
                                    onChange={handleChange}
                                    onBlur={() => {
                                        if (!cmp.cname) {
                                            setCmpFocus({
                                                ...cmpFocus,
                                                cname: false,
                                            });
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div
                            className={classNames(authStyles.inputContainer, "col-lg-12 martop-32")}
                        >
                            <div
                                className={
                                    cmpFocus.cemail
                                        ? cmpErr.cemail
                                            ? "input-box active w-100 forgot-email-border"
                                            : "input-box active w-100"
                                        : cmpErr.cemail
                                        ? "input-box w-100 forgot-email-border"
                                        : "input-box w-100"
                                }
                            >
                                <div className={!validator.isEmail(cmp.cemail) ? "d-none" : ""}>
                                    <Image
                                        src={validemail}
                                        alt="Valid Email"
                                        className="img-fluid"
                                    />
                                </div>
                                <label>Company Email address</label>
                                <input
                                    type="text"
                                    className="w-100"
                                    name="cemail"
                                    value={cmp.cemail}
                                    onFocus={() => inputFocus("cemail")}
                                    onChange={handleChange}
                                    onBlur={() => {
                                        if (!cmp.cemail) {
                                            setCmpFocus({
                                                ...cmpFocus,
                                                cemail: false,
                                            });
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            className={
                                cmpErr.cemail
                                    ? "col-lg-12 text-start px-4 forgot-email-err"
                                    : "d-none"
                            }
                        >
                            Enter a valid email address
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className={classNames(authStyles.inputContainer, "col-lg-12 martop-32")}
                        >
                            <div
                                className={
                                    cmpFocus.cphone
                                        ? "input-box active w-100"
                                        : cmpErr.cphone
                                        ? "input-box w-100 forgot-email-border"
                                        : "input-box w-100"
                                }
                            >
                                <label>Company phone</label>
                                <input
                                    type="text"
                                    className="w-100"
                                    name="cphone"
                                    value={cmp.cphone}
                                    onFocus={() => inputFocus("cphone")}
                                    onChange={handleChange}
                                    onBlur={() => {
                                        if (!cmp.cphone) {
                                            setCmpFocus({
                                                ...cmpFocus,
                                                cphone: false,
                                            });
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={classNames(authStyles.button, "px-2 mt-5")}>
                        <button className="w-100" onClick={handleSignUp}>
                            Sign up
                        </button>
                    </div>

                    <div className={classNames(authStyles.signIn, "mt-4")}>
                        Already have an account yet? <span onClick={handleLogin}>Sign in</span>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default SignUpPage2;

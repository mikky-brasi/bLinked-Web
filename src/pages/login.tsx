import { useRouter } from "next/router";
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
import bLinkedLogo from "../../public/img/bLinkedLogo.svg";
import { useGoogleLoginHandler } from "../modules/google-oauth/useGoogleLoginHandler";
import Image from "next/image";
import styles from "@/styles/pages/SignIn.module.scss";
import authStyles from "@/styles/shared/auth.module.scss";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { useFloatingLabelFormInput } from "../hooks/useFloatingLabelFormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const LoginFormSchema = z.object({
    email: z.string().email("Enter a valid email address"),
    password: z.string(),
});

type LoginFormValues = z.infer<typeof LoginFormSchema>;

const SignInPage = () => {
    const router = useRouter();

    const form = useForm<LoginFormValues>({ mode: "all", resolver: zodResolver(LoginFormSchema) });
    const { errors, dirtyFields } = form.formState;

    const [passwordType, setPasswordType] = useState("password");

    const emailInput = useFloatingLabelFormInput(form, "email");
    const passwordInput = useFloatingLabelFormInput(form, "password");

    const handlePassType = () =>
        passwordType === "password" ? setPasswordType("text") : setPasswordType("password");

    const submit = (values: LoginFormValues) => {
        const { email } = values;

        localStorage.setItem("accessToken", email);
        router.push("/home");
    };

    const handleForgot = () => router.push("/auth/forgot_password");

    const handleCreateAC = () => router.push("/auth/sign_up1");

    const handleGoogleLogin = useGoogleLoginHandler?.();

    return (
        <div className={authStyles.wrapper}>
            <div className="row w-100">
                <div className={classNames(styles.containerA, "col-lg-8")}>
                    <div className="d-flex justify-content-center">
                        <Image
                            src={bLinkedLogo}
                            alt="Logo"
                            className="img-fluid"
                            style={{ maxHeight: "150px" }}
                        />
                    </div>
                    <div className={styles.containerATitle}>Welcome back to bLinked, 👏🏽</div>

                    <div className={classNames(styles.subContainer, "px-md-5 mt-5")}>
                        <div className={classNames(styles.signInWithGoogle, "px-md-3")}>
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
                        <div className={styles.signInWithEmailDivider}>
                            <div></div>
                            <div className={classNames(styles.signInWithEmailDividerText, "mx-4")}>
                                Or, sign in with your email
                            </div>
                            <div></div>
                        </div>

                        <form
                            className={classNames(styles.subContainerItem, "row")}
                            onSubmit={form.handleSubmit(submit)}
                        >
                            <div className={classNames(authStyles.inputContainer, "col-lg-12")}>
                                <div
                                    className={classNames(
                                        "input-box w-100",
                                        emailInput.active && "active",
                                        errors.email && "forgot-email-border",
                                    )}
                                >
                                    <div
                                        className={classNames(
                                            (errors.email || !dirtyFields.email) && "d-none",
                                        )}
                                    >
                                        <Image
                                            src={validemail}
                                            alt="Valid Email"
                                            className="img-fluid"
                                        />
                                    </div>

                                    <label>Email</label>

                                    <input type="text" className="w-100" {...emailInput.props} />
                                </div>
                            </div>

                            <div
                                className={
                                    errors.email
                                        ? "col-lg-12 text-start px-4 forgot-email-err"
                                        : "d-none"
                                }
                            >
                                {errors.email?.message}
                            </div>

                            <div className={classNames(authStyles.inputContainer, "col-lg-12")}>
                                <div
                                    className={classNames(
                                        "input-box w-100",
                                        passwordInput.active && "active",
                                        errors.password && "forgot-email-border",
                                    )}
                                >
                                    <div>
                                        <Image
                                            src={passwordType === "password" ? eye : hiddenEye}
                                            alt="Eye"
                                            className={classNames(styles.eyeIcon, "img-fluid")}
                                            onClick={handlePassType}
                                        />
                                    </div>

                                    <label>Password</label>

                                    <input
                                        type={passwordType}
                                        className="w-100"
                                        {...passwordInput.props}
                                    />
                                </div>
                            </div>

                            <div
                                className={classNames(
                                    styles.signInWithEmailBtnContainer,
                                    "px-md-3",
                                )}
                            >
                                <button
                                    type="submit"
                                    className="w-100"
                                    onClick={() => form.trigger()}
                                >
                                    Log in
                                </button>
                            </div>
                        </form>

                        <div
                            className={classNames(styles.forgotPassword, "px-3")}
                            onClick={handleForgot}
                        >
                            Forgot your password?
                        </div>

                        <div className={classNames(styles.createAccount, "mt-4 px-3")}>
                            Don’t have an account yet?{" "}
                            <span onClick={handleCreateAC}>Create account</span>
                        </div>

                        <div className={classNames(styles.signInFooter, "px-3 mb-5")}>
                            <div>Help</div>
                            <div>Terms & Conditions</div>
                            <div>Privacy Policy</div>
                        </div>
                    </div>
                </div>

                <div className={classNames(styles.containerB, "col-lg-4 px-5 py-5")}>
                    <div>
                        <div>
                            <Image src={partical5} alt="" className="img-fluid" />
                        </div>

                        <div className={classNames(styles.containerBTitle, "mt-5")}>
                            Sell fast, sell more - grow your business.
                        </div>

                        <p className={classNames(styles.containerBDesc, "mt-4")}>
                            Manage your inventory accross multiple sales channels, collect all types
                            of payments and analyze your sales with one tool.
                        </p>
                    </div>

                    <div className={styles.vector}>
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

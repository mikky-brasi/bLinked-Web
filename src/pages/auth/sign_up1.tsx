import React, { useState } from "react";
import { useRouter } from "next/router";
import validator from "validator";
// Assets
import { validemail } from "../../../public/img";
import { eye, hiddenEye } from "../../../public/img";
import bLinkedLogo from "../../../public/img/bLinkedLogo.svg";
// Components
import Footer from "../../components/Footer";
import Image from "next/image";
import styles from "@/styles/pages/SignUp.module.scss";
import classNames from "classnames";
import authStyles from "@/styles/shared/auth.module.scss";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFloatingLabelFormInput } from "../../hooks/useFloatingLabelFormInput";

const SignUpFormSchema = z.object({
    firstName: z.string().trim().min(1, { message: "" }),
    lastName: z.string().trim().min(1, ""),
    email: z
        .string()
        .trim()
        .email("Enter a valid email address")
        .min(1, "Enter a valid email address"),
    password: z
        .string()
        .trim()
        .refine((value) => validator.isStrongPassword(value), {
            message:
                "Enter a strong password containing at least 8 characters with 1 lower" +
                "case letter, 1 upper case letter, 1 number and 1 special character",
        }),
});

type SignUpFormValues = z.infer<typeof SignUpFormSchema>;

const SignUpPage1 = () => {
    const router = useRouter();

    const form = useForm<SignUpFormValues>({
        mode: "all",
        resolver: zodResolver(SignUpFormSchema),
    });
    const {
        formState: { errors, dirtyFields },
    } = form;

    const firstNameInput = useFloatingLabelFormInput(form, "firstName");
    const lastNameInput = useFloatingLabelFormInput(form, "lastName");
    const emailInput = useFloatingLabelFormInput(form, "email");
    const passwordInput = useFloatingLabelFormInput(form, "password");

    const [passwordType, setPasswordType] = useState("password");

    const handlePassType = () =>
        passwordType === "password" ? setPasswordType("text") : setPasswordType("password");

    const signUp = (values: SignUpFormValues) => {
        return router.push("/auth/sign_up2");
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
                <form
                    className={classNames(authStyles.subContainer, "px-md-5 py-5")}
                    onSubmit={form.handleSubmit(signUp)}
                >
                    <div className={authStyles.title}>Let’s get you started 👇🏽</div>
                    <div className={authStyles.subtitle}>First of, let’s get to know you</div>

                    <div className="row martop-32">
                        <div className={classNames(authStyles.inputContainer, "col-lg-6")}>
                            <div
                                className={classNames(
                                    "input-box w-100",
                                    firstNameInput.active && "active",
                                    errors.firstName && "forgot-email-border",
                                )}
                            >
                                <label>First name</label>
                                <input type="text" className="w-100" {...firstNameInput.props} />
                            </div>
                        </div>
                        <div className={classNames(authStyles.inputContainer, "col-lg-6")}>
                            <div
                                className={classNames(
                                    "input-box w-100",
                                    lastNameInput.active && "active",
                                    errors.lastName && "forgot-email-border",
                                )}
                            >
                                <label>Last name</label>
                                <input type="text" className="w-100" {...lastNameInput.props} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className={classNames(authStyles.inputContainer, "col-lg-12 martop-32")}
                        >
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
                    </div>
                    <div className="row">
                        <div
                            className={classNames(authStyles.inputContainer, "col-lg-12 martop-32")}
                        >
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
                                        className="img-fluid pointer"
                                        onClick={handlePassType}
                                    />
                                </div>
                                <label>Create password</label>
                                <input
                                    type={passwordType}
                                    className="w-100"
                                    {...passwordInput.props}
                                />
                            </div>
                        </div>
                        <div
                            className={
                                errors.password
                                    ? "col-lg-12 text-start px-4 forgot-email-err"
                                    : "d-none"
                            }
                        >
                            {errors.password?.message}
                        </div>
                    </div>

                    <div className={classNames(styles.termsCondition, "my-4")}>
                        By clicking on the Continue button you agree with our
                        <span>
                            {" "}
                            Terms <br />& Conditions
                        </span>{" "}
                        and <span>Privacy Policy</span>
                    </div>

                    <div className={classNames(authStyles.button, "px-2")}>
                        <button className="w-100" onClick={() => form.trigger()}>
                            Continue
                        </button>
                    </div>

                    <div className={classNames(authStyles.signIn, "mt-4")}>
                        Already have an account yet? <span onClick={handleLogin}>Sign in</span>
                    </div>
                </form>

                <Footer />
            </div>
        </div>
    );
};

export default SignUpPage1;

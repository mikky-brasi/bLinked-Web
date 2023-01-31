import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
import { logo } from "../../../public/img";
import Footer from "../../components/Footer";
import styles from "@/styles/pages/Otp.module.scss";
import authStyles from "@/styles/shared/auth.module.scss";
import classNames from "classnames";

const OTPScreen = () => {
    const router = useRouter();
    const [inputProps, handleSubmitOTP] = useOtpInputs();

    const handleLogin = () => {
        router.push("/");
    };

    return (
        <div className={authStyles.wrapper}>
            <div className={classNames(authStyles.main, "container")}>
                <Image src={logo} alt="Logo" className="img-fluid my-5" />
                <div className={classNames(authStyles.subContainer, "px-md-5 py-5")}>
                    <div className={authStyles.title}>We sent you a password reset link, 📬</div>
                    <div className="row justify-content-center">
                        <div className={classNames(authStyles.subtitle, "col-md-8 px-4 px-md-4")}>
                            A password reset link has been sent to your email, fellow the link or
                            enter the 6 digits code in it below to continue.
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className={styles.otp}>
                            {inputProps.map((inputProps) => (
                                <input key={inputProps.name} {...inputProps} />
                            ))}
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div
                            className={classNames(authStyles.button, "col-md-8 px-md-2 px-4 mt-5")}
                        >
                            <button className="w-100" onClick={handleSubmitOTP}>
                                Continue
                            </button>
                        </div>
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

function useOtpInputs() {
    const inputs = Array.from({ length: 6 }, useOtpInputState);

    const inputProps = inputs.map((input, index) => {
        const { error, value, ref } = input;

        const focusOnRelative = (relativeIndex: number) => {
            const element = inputs[index + relativeIndex]?.ref.current;
            if (!element) return false;

            element.focus();
            return true;
        };

        return {
            type: "text",
            className: error ? styles.otpError : value ? styles.active : "",
            name: `pin${index}`,
            value,
            ref,
            maxLength: 1,
            onChange: (e) => {
                input.setValue(e.target.value);
                input.setError(false);

                if (e.target.value !== "") {
                    focusOnRelative(1);
                }
            },
            onFocus: () => {
                ref.current?.select();
            },
            onKeyDown: (e) => {
                if (e.key === "Backspace") {
                    focusOnRelative(value === "" ? -1 : 0);
                    return;
                }

                if (value === "") return;

                ref.current?.select();
            },
        } satisfies React.DetailedHTMLProps<
            React.InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
        >;
    });

    const router = useRouter();
    const handleSubmitOTP = () => {
        const success = inputs
            .map((input) => {
                const isValid = !!input.value;

                input.setError(!isValid);
                return isValid;
            })
            .every((isValid) => isValid);

        if (!success) return;

        router.push("/auth/reset");
    };

    return [inputProps, handleSubmitOTP] as const;
}

function useOtpInputState() {
    const ref = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    return {
        ref,
        value,
        setValue,
        error,
        setError,
    };
}

export default OTPScreen;

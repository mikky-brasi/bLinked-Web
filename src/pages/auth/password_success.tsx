import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import { logo, lock } from "../../../public/img";
import Footer from "../../components/Footer";

const PasswordReset = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };

  return (
    <div className="auth-main">
      <div className="container auth-cmn-main">
        <Image src={logo} alt="Logo" className="img-fluid my-5" />
        <div className="auth-cmn-subcontainer px-md-5 py-5">
          <div className="passreset-success-icon mb-5">
            <div>
              <Image src={lock} alt="Lock" className="img-fluid" />
            </div>
          </div>
          <div className="auth-cmn-title">Password reset successful!</div>
          <div className="row justify-content-center">
            <div className="auth-cmn-subtitle px-5">
              The password for your bLinked account has been successful reset
            </div>
          </div>

          <div className="row justify-content-center px-md-5 px-4 auth-cmn-btn mt-5">
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

import { useGoogleLogin, UseGoogleLoginOptionsImplicitFlow } from "@react-oauth/google";
import { useIsMounted } from "../../hooks/useIsMounted";
import { googleOAuthConfig } from "./googleOAuthConfig";

/**
 * This hook returns a function that can be used to login with Google.
 * It is only available if the Google OAuth is enabled and the code is running in the browser.
 */
export const useGoogleLoginHandler =
    !googleOAuthConfig.enabled || typeof window === "undefined"
        ? undefined
        : () => {
              const googleSuccess: UseGoogleLoginOptionsImplicitFlow["onSuccess"] = async (
                  tokenResponse,
              ) => {
                  type UserInfo = {
                      sub: string;
                      name: string;
                      given_name: string;
                      family_name: string;
                      picture: string;
                      email: string;
                      email_verified: boolean;
                      locale: string;
                  };
                  const userInfo: UserInfo = await fetch(
                      "https://www.googleapis.com/oauth2/v3/userinfo",
                      {
                          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
                      },
                  ).then((res) => res.json());

                  // TODO: Add defensive code. Validate the shape of the response.

                  const { name, email, picture } = userInfo;
                  console.log(name);
                  console.log(email);
                  console.log(picture);
              };

              const googleLogin = useGoogleLogin({
                  onSuccess: googleSuccess,
                  onError: (response) => console.error(response),
              });

              const isMounted = useIsMounted();

              return isMounted ? () => googleLogin() : undefined;
          };

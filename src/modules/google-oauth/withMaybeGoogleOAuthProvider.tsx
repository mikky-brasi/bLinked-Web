import { GoogleOAuthProvider } from "@react-oauth/google";
import { googleOAuthConfig } from "./googleOAuthConfig";

const config = googleOAuthConfig;

export function withMaybeGoogleOAuthProvider<T extends {}>(
    Component: React.ComponentType<T>,
): React.ComponentType<T> {
    if (!config.enabled) {
        return Component;
    }

    const Wrapper: React.ComponentType<T> = (props) => (
        <GoogleOAuthProvider clientId={config.clientID} onScriptLoadError={console.error}>
            <Component {...props} />
        </GoogleOAuthProvider>
    );

    Wrapper.displayName = `withGoogleOAuthProvider(${Component.displayName || Component.name})`;

    return Wrapper;
}

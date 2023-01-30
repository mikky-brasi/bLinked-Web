const clientID = process.env.CLIENT_ID;

export const googleOAuthConfig = !clientID //
    ? ({ enabled: false } as const)
    : ({ enabled: true, clientID } as const);

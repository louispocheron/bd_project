import jwt, { JwtPayload } from "jsonwebtoken"

interface signOption {
    expireIn?: string | number
};

const DEFAULT_SIGN_OPTION: signOption = {
    expireIn: "1h"
};

export const signJwtAccessToken = (payload: JwtPayload, options: signOption = DEFAULT_SIGN_OPTION) => {
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(payload, secretKey!)
    return token;
};

export const verifyJwt = (token: string) => {
    try {
        const secretKey = process.env.SECRET_KEY;
        const decoded = jwt.verify(token, secretKey!);
        return decoded as JwtPayload;
    } catch (error) {
        console.log(error);
        return null;
    }
}
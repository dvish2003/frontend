export type User ={
    _id: string;
    name: string;
    email: string;
    password: string;
    VerificationCode?: number;
    isVerified?: boolean;
}


export type formUser ={
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export type VerifyUser ={
    email: string;
    verificationCode: number;
}

export type LoginFormUser = {
    email: string;
    password: string;
}
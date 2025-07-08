import type {formUser, LoginFormUser, VerifyUser} from "../models/User.ts";
import {apiClient_1} from "./apiClient.ts";

export const saveUser = async (user: formUser) => {
    const response = await apiClient_1.post("/users/register", user);
    console.log("return response data",response.data);
    return response.data;

}
export const loginUser = async (user: LoginFormUser):Promise<string> => {
    const response = await apiClient_1.post("/users/login", user);
    console.log("return response data",response.data);
    return response.data.token;

}


export const verifyUserService = async (user: VerifyUser) => {
    const response = await apiClient_1.post("/users/verifyCode", user);
    console.log("return response data",response.data);
    return response.data;

}

export const getUser = async (user: LoginFormUser) => {
    const response = await apiClient_1.post("/users/getUser", user);
    console.log("return response data",response.data);
    return response.data.user;

}
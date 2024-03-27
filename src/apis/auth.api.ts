import { LoginProps } from "@/pages/Login";
import { httpClient } from "./http";
import { SignupProps } from "@/pages/Signup";

export const login = async (data: LoginProps) => {
    const response = await httpClient.post("/login", data);
    return response.data;
};

export const signup = async (data: SignupProps) => {
    const response = await httpClient.post("/users", data);
    return response.data;
};

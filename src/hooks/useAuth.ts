import { login, signup } from "@/apis/auth.api";
import { LoginProps } from "@/pages/Login";
import { useAuthStore } from "@/store/authStore";
import { useAlert } from "./useAlert";
import { useNavigate } from "react-router-dom";
import { SignupProps } from "@/pages/Signup";

export const useAuth = () => {
    const { storeLogin } = useAuthStore();
    const { showAlert } = useAlert();
    const navigate = useNavigate();

    const userLogin = (data: LoginProps) => {
        login(data).then(
            (res) => {
                storeLogin(res.token);
                showAlert("로그인이 완료되었습니다.");
                navigate("/notes");
            },
            (error) => {
                showAlert("로그인을 실패했습니다.");
            }
        );
    };

    const userSignup = (data: SignupProps) => {
        signup(data).then(
            (res) => {
                showAlert("회원가입이 완료되었습니다.");
                navigate("/login");
            },
            (error) => {
                showAlert("회원가입이 실패했습니다.");
            }
        );
    };

    return { userLogin, userSignup };
};

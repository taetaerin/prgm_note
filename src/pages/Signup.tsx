import Button from "@/components/common/Button";
import InputText from "@/components/common/InputText";
import Title from "@/components/common/Title";
import { useAuth } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LoginStyle } from "./Login";

export interface SignupProps {
    email: string;
    password: string;
}

export default function Signup() {
    const { userSignup } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupProps>();

    const onSubmit = (data: SignupProps) => {
        userSignup(data);
    };

    return (
        <div>
            <LoginStyle>
                <Title size="large" color="primaryColor">
                    회원가입
                </Title>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <InputText
                            placeholder="이메일"
                            inputType="email"
                            {...register("email", { required: true })}
                            inputMode="email"
                        />
                        {errors.email && <p className="error-text">이메일을 입력해주세요</p>}
                    </fieldset>
                    <fieldset>
                        <InputText
                            placeholder="비밀번호"
                            inputType="password"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <p className="error-text">비밀번호를 입력해주세요</p>}
                    </fieldset>
                    <fieldset>
                        <Button type="submit" size="medium" scheme="primary">
                            회원가입
                        </Button>
                    </fieldset>
                    <div className="info">
                        계정이 이미 있으신가요?
                        <Link to="/login"> 로그인하기</Link>
                    </div>
                </form>
            </LoginStyle>
        </div>
    );
}

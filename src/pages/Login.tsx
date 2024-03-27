import Button from "@/components/common/Button";
import InputText from "@/components/common/InputText";
import Title from "@/components/common/Title";
import { useAuth } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";

export interface LoginProps {
    email: string;
    password: string;
}

export default function Login() {
    const { userLogin } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginProps>();

    const onSubmit = (data: LoginProps) => {
        userLogin(data);
    };

    return (
        <div>
            <LoginStyle>
                <Title size="large" color="primaryColor">
                    로그인
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
                            로그인
                        </Button>
                    </fieldset>
                    <div className="info">
                        계정이 없으신가요?
                        <Link to="/signup"> 가입하기</Link>
                    </div>
                </form>
            </LoginStyle>
        </div>
    );
}

export const LoginStyle = styled.div`
    max-width: ${({ theme }) => theme.layout.width.normal};
    display: flex;
    margin: 0px auto;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;

    fieldset {
        border: 0;
        padding: 0 0 20px 0;
        .error-text {
            color: red;
        }
    }
    input {
        width: 100%;
    }

    button {
        width: 100%;
    }
    .info {
        text-align: center;
        padding: 16px 0 0 0;
    }
`;

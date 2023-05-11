import {
  MainWrapper,
  Title,
  P,
  OutterWrapper,
  ForgotPassword,
  LoginButton,
} from "../styles/login.style";
import CustomInput from "../components/login/input";

export default function Login() {
  return (
    <MainWrapper>
      <Title>Welcome</Title>
      <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
      <OutterWrapper>
        <CustomInput label="email" />
        <CustomInput label="password" />
      </OutterWrapper>
      <ForgotPassword>Forgot your password?</ForgotPassword>
      <LoginButton>Login</LoginButton>
    </MainWrapper>
  );
}

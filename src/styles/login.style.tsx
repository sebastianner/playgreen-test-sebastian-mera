import styled from "styled-components";

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #e5e5e588;
`;

const Title = styled.h1`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 122.02%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #161617;
  margin: 0;
`;

const P = styled.p`
  font-family: "Epilogue", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 148.02%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #232232;
  opacity: 0.8;
  width: 30ch;
  margin: 7px 0 23px 0;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 330px;
  height: 67px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 18px;
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 122.02%;
  display: flex;
  align-items: center;
  color: #161617;
  padding: 0 14px;
  &:focus {
    outline: none;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  position: relative;
`;

const InputLabel = styled.label`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 122.02%;
  color: #3c3c3c;
  opacity: 0.6;
  position: absolute;
  top: 8px;
  left: 15px;
  text-transform: capitalize;
`;

const OutterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ForgotPassword = styled.span`
  margin: 22px 150px 0 0;
  cursor: pointer;
`;

const LoginButton = styled.button`
  width: 122px;
  height: 66px;
  background: linear-gradient(99deg, #236bfe 6.69%, #0d4ed3 80.95%);
  box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
  border-radius: 25px;
  margin: 22px 200px 0 0;
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 122.02%;
  color: #fefefe;
  border: none;
  animation-timing-function: linear;

  &:active {
    animation-name: button-click;
    animation-duration: 0.2s;
    animation-timing-function: linear;
  }
  @keyframes button-click {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export {
  MainWrapper,
  Title,
  P,
  Input,
  InputWrapper,
  InputLabel,
  OutterWrapper,
  ForgotPassword,
  LoginButton,
};

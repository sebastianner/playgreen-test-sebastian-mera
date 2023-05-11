import { Input, InputLabel, InputWrapper } from "../../styles/login.style";

type Props = { label: string };

const CustomInput = ({ label }: Props) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <Input type={label}></Input>
    </InputWrapper>
  );
};

export default CustomInput;

import { MainWrapper } from "../styles/home.style";
import Slider from "../components/home/slider";

type Props = {};

export default function Home({}: Props) {
  return (
    <MainWrapper>
      <Slider />
    </MainWrapper>
  );
}

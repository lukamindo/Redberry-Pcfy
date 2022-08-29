import Button from "library/component/button/Button";
import logo from "assets/imgs/logo.svg";
import landingimg from "assets/imgs/landingimg.svg";
import { LandingWrapper } from "./Landing.styled";

function Landing() {
  return (
    <LandingWrapper>
      <img src={logo} alt="redberry" />
      <img className="second_img" src={landingimg} alt="PCfy" />
      <Button onClick={() => console.log("დამატება")} margin=" 123px 0 0 0 ">
        ჩანაწერის დამატება
      </Button>
      <Button onClick={() => console.log("სია")} margin=" 26px 0 0 0 ">
        ჩანაწერების სია
      </Button>
    </LandingWrapper>
  );
}

export default Landing;

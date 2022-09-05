import Button from "library/component/button/Button";
import logo from "assets/imgs/logo.svg";
import landingimg from "assets/imgs/landingimg.svg";
import { LandingWrapper } from "./Landing.styled";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <LandingWrapper>
      <img src={logo} alt="redberry" />
      <img className="second_img" src={landingimg} alt="PCfy" />
      <Button onClick={() => navigate("/form/1")} margin=" 123px 0 0 0 ">
        ჩანაწერის დამატება
      </Button>
      <Button onClick={() => navigate("/results")} margin=" 26px 0 147px 0 ">
        ჩანაწერების სია
      </Button>
    </LandingWrapper>
  );
}

export default Landing;

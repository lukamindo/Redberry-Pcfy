import Button from "library/component/button/Button";
import logo from "assets/imgs/logo.svg";
import landingimg from "assets/imgs/landingimg.svg";
import { LandingWrapper } from "./Landing.styled";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import mobilelandingimage from "assets/imgs/mobilelandingimage.svg";

function Landing() {
  const navigate = useNavigate();

  const phone = useMediaQuery({ query: "(max-width: 391px)" });

  return (
    <LandingWrapper>
      <img src={logo} alt="redberry" />
      <img
        className="second_img"
        src={phone ? mobilelandingimage : landingimg}
        alt="PCfy"
      />
      <Button
        width={phone ? "358px" : "387px"}
        onClick={() => navigate("/form/1")}
        margin={phone ? "122px 16px 16px 16px" : "123px 0 0 0 "}
      >
        ჩანაწერის დამატება
      </Button>
      <Button
        width={phone ? "358px" : "387px"}
        onClick={() => navigate("/results")}
        margin={phone ? "0 16px 0 16px" : "26px 0 147px 0"}
      >
        ჩანაწერების სია
      </Button>
    </LandingWrapper>
  );
}

export default Landing;

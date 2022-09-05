import Button from "library/component/button/Button";
import { useNavigate } from "react-router-dom";
import {
  StyledPopUpModal,
  StyledSubmitPageBackGround,
} from "./SubmitPage.styled";
import SubmitIcon from "assets/imgs/SubmitIcon.svg";

function SubmitPage() {
  const navigate = useNavigate();

  return (
    <StyledSubmitPageBackGround>
      <StyledPopUpModal>
        <img src={SubmitIcon}></img>
        <p>ჩანაწერი დამატებულია!</p>
        <Button
          margin="79px 275px 0 275px"
          width="297px"
          onClick={() => navigate("/results")}
        >
          სიაში გადაყვანა
        </Button>
        <Button
          onClick={() => navigate("/")}
          backgroundColor="#ffffff"
          width="297px"
          fontColor="#0089A7"
          margin="0 0  30px 0"
        >
          მთავარი
        </Button>
      </StyledPopUpModal>
    </StyledSubmitPageBackGround>
  );
}

export default SubmitPage;

{
  /* <LandingWrapper>
      <img src={logo} alt="redberry" />
      <img className="second_img" src={landingimg} alt="PCfy" />
      <Button onClick={() => navigate("/form")} margin=" 123px 0 0 0 ">
        ჩანაწერის დამატება
      </Button>
      <Button onClick={() => navigate("/form")} margin=" 26px 0 0 0 ">
        ჩანაწერების სია
      </Button>
    </LandingWrapper> */
}

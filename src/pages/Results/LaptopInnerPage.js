import React from "react";
import {
  StyledLaptopInnerPageWrapper,
  StyledLaptopTitle,
} from "./LaptopInnerPage.styled";
import BackIconButton from "library/component/button/BackIconButton";

const data = {
  user: {
    name: "გელა",
    surname: "გელაშვილი",
    team_id: 1,
    position_id: 1,
    email: "gela.gelashvili@redberry.ge",
    phone_number: 995555555555,
  },
  laptop: {
    name: "HP",
    image: "/storage/images/uLuuQCcXG9MhotvvMbezzXvPrEJFc5m74JfUlWdp.jpg",
    brand_id: 1,
    cpu: {
      name: "Intel Core i3",
      cores: 64,
      threads: 128,
    },
    ram: 34,
    hard_drive_type: "HDD",
    state: "new",
    purchase_date: "10-10-2003",
    price: 1600,
  },
};

const LaptopInnerPage = () => {
  return (
    <>
      <BackIconButton
        onClickHandler={() => console.log("es gadadis chanawerebis siaze")}
      />
      <StyledLaptopInnerPageWrapper>
        <StyledLaptopTitle>ლეპტოპის ინფო</StyledLaptopTitle>
      </StyledLaptopInnerPageWrapper>
    </>
  );
};

export default LaptopInnerPage;

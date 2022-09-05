import React, { useEffect, useState } from "react";
import {
  StyledLaptopInnerPageCol,
  StyledLaptopInnerPageImage,
  StyledLaptopInnerPageSection,
  StyledLaptopInnerPageWrapper,
  StyledSpecList,
} from "./LaptopInnerPage.styled";
import { TOKEN } from "DATA";
import useGetFetch from "library/utilities/useGetFetch";
import { useParams } from "react-router-dom";
import SpecRow from "./SpecRow";

const LaptopInnerPage = () => {
  const [team, setTeam] = useState("");
  const [position, setPosition] = useState("");
  const [brand, setBrand] = useState("");

  const { id } = useParams();

  const { data, loading } = useGetFetch(
    `https://pcfy.redberryinternship.ge/api/laptop/${id}?token=${TOKEN}`
  );

  const { data: teamData } = useGetFetch(
    "https://pcfy.redberryinternship.ge/api/teams",
    []
  );
  const { data: positionData } = useGetFetch(
    "https://pcfy.redberryinternship.ge/api/positions",
    []
  );

  const { data: brandsData } = useGetFetch(
    "https://pcfy.redberryinternship.ge/api/brands",
    []
  );

  useEffect(() => {
    if (loading) return;
    setTeam(teamData.find((item) => item.id === data.user.team_id));
    setPosition(positionData.find((item) => item.id === data.user.position_id));
    setBrand(brandsData.find((item) => item.id === data.laptop.brand_id));
  }, [teamData, positionData, brandsData]);

  const laptopCondition = () => {
    return data.laptop.state === "used" ? "მეორადი" : "ახალი";
  };

  if (!loading) {
    return (
      <StyledLaptopInnerPageWrapper>
        <StyledLaptopInnerPageSection alignItem="center">
          <StyledLaptopInnerPageCol>
            <img
              src={`https://pcfy.redberryinternship.ge/${data.laptop.image}`}
            />
          </StyledLaptopInnerPageCol>
          <StyledLaptopInnerPageCol>
            <SpecRow
              title="სახელი"
              value={data.user.name + " " + data.user.surname}
            />
            <SpecRow title="თიმი" value={team?.name} />
            <SpecRow title="პოზიცია" value={position?.name} />
            <SpecRow title="მეილი" value={data.user.email} />
            <SpecRow title="ტელ. ნომერი" value={data.user.phone_number} />
          </StyledLaptopInnerPageCol>
        </StyledLaptopInnerPageSection>
        <StyledLaptopInnerPageSection className="border">
          <StyledLaptopInnerPageCol>
            <SpecRow title="ლეპტოპის სახელი" value={data.laptop.name} />
            <SpecRow title="ლეპტოპის ბრენდი" value={brand?.name} />
            <SpecRow title="RAM" value={data.laptop.ram} />
            <SpecRow
              title="მეხსიერების ტიპი"
              value={data.laptop.hard_drive_type}
            />
          </StyledLaptopInnerPageCol>
          <StyledLaptopInnerPageCol>
            <SpecRow title="CPU" value={data.laptop.cpu.name} />
            <SpecRow title="CPU-ს ბირთვი" value={data.laptop.cpu.cores} />
            <SpecRow title="CPU-ს ნაკადი" value={data.laptop.cpu.threads} />
          </StyledLaptopInnerPageCol>
        </StyledLaptopInnerPageSection>
        <StyledLaptopInnerPageSection>
          <StyledLaptopInnerPageCol>
            <SpecRow title="ლეპტოპის მდგომარეობა" value={laptopCondition()} />
            <SpecRow title="ლეპტოპის ფასი" value={data.laptop.price} />
          </StyledLaptopInnerPageCol>
          <StyledLaptopInnerPageCol>
            <SpecRow title="შეძენის რიცხვი" value={data.laptop.purchase_date} />
          </StyledLaptopInnerPageCol>
        </StyledLaptopInnerPageSection>
      </StyledLaptopInnerPageWrapper>
    );
  } else return <div>loading</div>;
};

export default LaptopInnerPage;

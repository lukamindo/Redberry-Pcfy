import React from "react";
import { StyledResultListWrapper } from "./ResultList.styled";
import { TOKEN } from "DATA";
import useGetFetch from "library/utilities/useGetFetch";
import ResultListComponent from "./ResultListComponent";

const ResultList = () => {
  const { data } = useGetFetch(
    `https://pcfy.redberryinternship.ge/api/laptops?token=${TOKEN}`
  );

  console.log(data);

  return (
    <StyledResultListWrapper>
      {data?.map((item) => {
        return (
          <ResultListComponent
            key={item.laptop.id}
            id={item.laptop.id}
            image={`https://pcfy.redberryinternship.ge/${item.laptop.image}`}
            name={item.laptop.name}
            owner={item.user.name + " " + item.user.surname}
          ></ResultListComponent>
        );
      })}
    </StyledResultListWrapper>
  );
};

export default ResultList;

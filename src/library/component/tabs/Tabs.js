import { tab } from "@testing-library/user-event/dist/tab";
import { useData } from "library/utilities/DataContext";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ButtonGroup, StyledNavLink, Tab } from "./Tabs.styled";

export default function TabGroup({ tabs }) {
  const { data } = useData();

  const defaultTabStyle = {
    color: "#232323",
    fontSize: "20px",
    fontWeight: "700",
    padding: "0px 33px",
    paddingBottom: "15px",
    textDecoration: "none",
    position: "relative",
  };

  return (
    <>
      <ButtonGroup>
        {tabs.map((tab, i) => (
          <StyledNavLink key={i}>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { ...defaultTabStyle } : defaultTabStyle;
              }}
              key={tab.title}
              to={tab.page}
              // onClick={(e) => (!data.activeSecondTab ? e.preventDefault() : "")}
            >
              {tab.title}
            </NavLink>
          </StyledNavLink>
        ))}
      </ButtonGroup>
    </>
  );
}

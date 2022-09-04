import { tab } from "@testing-library/user-event/dist/tab";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ButtonGroup, StyledNavLink, Tab } from "./Tabs.styled";

export default function TabGroup({ active, setActiveHandler, tabs }) {
  const defaultTabStyle = {
    color: "#232323",
    fontSize: "20px",
    fontWeight: "700",
    padding: "0px 33px",
    textDecoration: "none",
  };

  const ActiveTabStyle = {
    color: "#232323",
    fontSize: "20px",
    fontWeight: "700",
    padding: "0px 33px",
  };

  return (
    <>
      <ButtonGroup>
        {tabs.map((tab) => (
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { ...defaultTabStyle, color: "red" }
                : defaultTabStyle;
            }}
            key={tab.title}
            to={tab.page}
          >
            {tab.title}
          </NavLink>
          // <Tab
          //   key={type.title}
          //   active={active === type.page}
          //   onClick={() => setActiveHandler(type.page)}
          // >
          //   {type.title}
          // </Tab>
        ))}
      </ButtonGroup>
    </>
  );
}

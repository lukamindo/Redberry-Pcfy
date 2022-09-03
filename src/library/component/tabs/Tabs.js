import React, { useState } from "react";
import { ButtonGroup, Tab } from "./Tabs.styled";

export default function TabGroup({
  active,
  setActiveHandler,
  tabs,
  employeeFormIsValid,
}) {
  return (
    <>
      <ButtonGroup>
        {tabs.map((type) => (
          <Tab
            key={type.title}
            active={active === type.page}
            onClick={
              employeeFormIsValid ? () => setActiveHandler(type.page) : null
            }
          >
            {type.title}
          </Tab>
        ))}
      </ButtonGroup>
    </>
  );
}

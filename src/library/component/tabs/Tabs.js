import React, { useState } from "react";
import { ButtonGroup, Tab } from "./Tabs.styled";

export default function TabGroup({ active, setActiveHandler, tabs }) {
  const types = [
    { title: "თანამშრომლის ინფო", page: "employee" },
    { title: "ლეპტოპის მახასიათებლები", page: "laptop" },
    ,
  ];
  return (
    <>
      <ButtonGroup>
        {tabs.map((type) => (
          <Tab
            key={type.title}
            active={active === type.page}
            onClick={() => setActiveHandler(type.page)}
          >
            {type.title}
          </Tab>
        ))}
      </ButtonGroup>
    </>
  );
}

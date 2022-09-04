import React, { createContext, useState, useContext, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(
    JSON.parse(window.sessionStorage.getItem("FORM_DATA"))
  );

  const setValues = (values) => {
    setData((prevData) => ({ ...prevData, ...values }));
  };

  useEffect(() => {
    window.sessionStorage.setItem("FORM_DATA", JSON.stringify(data));
  }, [data]);

  return (
    <DataContext.Provider value={{ data, setValues }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

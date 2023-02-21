import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [dataToday, setDataToday] = useState("");
  const [dataYesterday, setDataYesterday] = useState("");


const yesterday = () => {
  let d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split('T')[0];
};

const today = () => {
  let d = new Date();
  return d.toISOString().split('T')[0];
}

  useEffect(()=>{  
    setDataYesterday(yesterday())
          setDataToday(today());},[])

  return (
    <DataContext.Provider value={{ dataToday, dataYesterday }}>
      {children}
    </DataContext.Provider>
  );
};
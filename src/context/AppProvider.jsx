/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import axios from "axios";

function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  const getUser = async () => {
    try {
      const res = await axios("https://api.github.com/users/adore1968");
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AppContext.Provider value={{ isLoading, user }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=fCZCQF8yj37iuBMnTTk5kX2qiiYtTXd0RaIWRRcl&start_date=2023-06-01";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data))
      .catch((error) => {
        console.error("Error fetching NASA API:", error);
      });
  }, []);

  return <Context.Provider value={{ allPhotos }}>{children}</Context.Provider>;
}

export { ContextProvider, Context };

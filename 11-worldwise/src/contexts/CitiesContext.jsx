import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:9000/cities");
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loading data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
}

CitiesProvider.propTypes = {
  children: PropTypes.node.isRequired, // Definiši da je children obavezni prop
};

export { CitiesProvider, CitiesContext };

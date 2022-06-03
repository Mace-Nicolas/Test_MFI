import React, { createContext, useContext, useReducer } from "react";

const cityContext = createContext();

const cities = [
  {
    name: "Paris",
    coordinates: [48.852811356272156, 2.3446346306093804],
  },
  {
    name: "Toulouse",
    coordinates: [43.63003246400752, 1.3650492174675548],
  },
];

const cityReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_CITY": {
      return { activeCity: action.payload };
    }
    default: {
      throw new Error("Unhandled action type: ", action.type);
    }
  }
};

const CityProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cityReducer, { activeCity: cities[0] });
  return (
    <cityContext.Provider value={{ state, dispatch }}>
      {children}
    </cityContext.Provider>
  );
};

const useCity = () => {
  const context = useContext(cityContext);
  if (context === undefined) {
    throw new Error("useTab must be used within a CityProvider");
  }
  return context;
};

export { CityProvider, useCity };

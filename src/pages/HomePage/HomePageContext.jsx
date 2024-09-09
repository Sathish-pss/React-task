import React, { createContext, useContext } from "react";

// Creating the context using the create context hook
const HomePageContext = createContext(null);

/**
 * Functional Component returns the Home Page context provider
 */
const HomePageContextProvider = ({ children }) => {
  return <HomePageContext.Provider>{children}</HomePageContext.Provider>;
};

/**
 * Custom hook to provide the context
 */
function useHomePageContext() {
  try {
    return useContext(HomePageContext);
  } catch (error) {
    console.error("Error using the home page context", error);
    return null;
  }
}

export { HomePageContextProvider, useHomePageContext };

import React from "react";
// Importing the customized components
import HomePage from "./HomePage";
import { HomePageContextProvider } from "./HomePageContext";

/**
 * Functional Component returns the Home Page container
 */
const HomePageContainer = () => {
  return (
    <HomePageContextProvider>
      <HomePage />
    </HomePageContextProvider>
  );
};
export default HomePageContainer;

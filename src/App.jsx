import React, { Fragment } from "react";
// Importing the external Libraries
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
// Importing the customized components
import HomePage from "./pages/HomePage/HomePage";

/**
 *
 * @returns Functional Component returns the main app
 */
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <ToastContainer hideProgressBar={true} theme="colored" />
    </Fragment>
  );
}

export default App;

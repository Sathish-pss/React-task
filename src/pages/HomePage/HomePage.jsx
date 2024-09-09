import React, { Fragment, useState } from "react";
// Importing the customized components
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
// Importing the Icons here
import Header from "../../components/Header";
import FormDrawer from "./FormDrawer";

/**
 * Functional component returns the Home page
 */
const HomePage = () => {
  const [isFormDrawerOpen, setFormDrawerOpen] = useState(false); // State to open the Form Drawer open

  // Function to open the Drawer open
  const openFormDrawer = () => {
    setFormDrawerOpen(true);
  };
  return (
    <Fragment>
      {/* Header Section */}
      <Header title="View Audience" />

      {/* Button to open the Sidebar */}
      <Grid
        container
        minHeight={"60vh"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item>
          <Button
            variant="outlined"
            onClick={openFormDrawer}
            sx={{
              fontSize: "1rem",
              fontWeight: "600",
              color: "#0009",
              border: "1px solid #0009",
            }}
          >
            Save Segment
          </Button>
        </Grid>
      </Grid>

      {/* Rendering the Form Drawer here */}
      <FormDrawer
        open={isFormDrawerOpen}
        handleClose={() => {
          setFormDrawerOpen(false);
        }}
      />
    </Fragment>
  );
};
export default HomePage;

// Custom styles for styling
const buttonStyle = {
  border: "1px solid #ffffff",
  color: "#ffffff",
};

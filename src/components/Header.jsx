import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

/**
 * 
 * @param {*} param0 
 * @returns Functional Component returns the header
 */
const Header = ({ title }) => {
  return (
    <Grid
      container
      px={2}
      py={4}
      alignItems="center"
      sx={{ background: "#008B8B" }}
    >
      {/* Arrow Icon */}
      <Grid>
        <ArrowBackIosIcon sx={{ color: "#ffffff" }} />
      </Grid>
      {/* Title Text */}
      <Grid>
        <Typography variant="h6" color="#ffffff">
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;

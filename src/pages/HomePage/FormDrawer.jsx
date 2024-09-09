import React, { useState } from "react";
// Import MUI Components here
import { Drawer, Typography, Stack, Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AddIcon from "@mui/icons-material/Add";
// Import MUI Icons
import Header from "../../components/Header";
// Importing the external libraries
import { toast } from "react-toastify";

/**
 * Functional component returns the Side Drawer to add forms
 */
const FormDrawer = ({ open, handleClose }) => {
  const [segmentName, setSegmentName] = useState(""); // State to set the Segment name input field
  const [selectedSchemas, setSelectedSchemas] = useState([]); // State to set the select schemas
  const [dropdownOptions, setDropdownOptions] = useState([
    { label: "First Name", value: "first_name" },
    { label: "Last Name", value: "last_name" },
    { label: "Gender", value: "gender" },
    { label: "Age", value: "age" },
    { label: "Account Name", value: "account_name" },
    { label: "City", value: "city" },
    { label: "State", value: "state" },
  ]); // State to set the Dropdown options array for the input
  const [selectedSchema, setSelectedSchema] = useState(""); // State to set the selected schema

  /**
   * Function to select the schema
   */
  const handleSchemaSelect = (e) => {
    setSelectedSchema(e.target.value);
  };

  /**
   * Function to Add the scehma based on the options array
   */
  const addNewSchema = () => {
    if (selectedSchema) {
      const selectedOption = dropdownOptions.find(
        (option) => option.value === selectedSchema
      );
      setSelectedSchemas([...selectedSchemas, selectedOption]);

      // Remove selected option from dropdown
      setDropdownOptions(
        dropdownOptions.filter((option) => option.value !== selectedSchema)
      );
      setSelectedSchema("");
    }
  };

  /**
   * Function to save the segment form
   */
  const handleSaveSegment = () => {
    // Sending the payload schema here
    const payload = {
      segment_name: segmentName,
      schemas: selectedSchemas,
    };
    console.log("Sending payload to server:", payload);
    toast.success("Schema added successfully");
    handleClose();
  };
  return (
    <Drawer
      open={open}
      onClose={handleClose}
      anchor="right"
      elevation={0}
      PaperProps={{
        sx: { width: "30vw" },
      }}
    >
      {/* Header Section */}
      <Header title="Saving Audience" />

      <Grid container p={1} my={1}>
        <Grid size={{ xs: 12 }}>
          <Typography sx={customStyles?.textStyle}>
            Enter the name of the segment
          </Typography>
        </Grid>
        <Grid size={{ xs: 12 }}>
          {/* Segment name form control */}

          <input
            fullWidth
            name="segmentName"
            size="small"
            placeholder="Name of the segment"
            value={segmentName}
            onChange={(e) => setSegmentName(e.target.value)}
            style={{ width: "100%", height: "30px", padding: "8px" }}
            required
          />
        </Grid>
      </Grid>

      {/* Subtitle section */}
      <Grid container p={1} my={1}>
        <Grid size={{ xs: 12 }}>
          <Typography sx={customStyles?.textStyle}>
            To Save you segment, you need to add the schemas to build the query
          </Typography>
        </Grid>
      </Grid>

      {/* Status color section */}
      <Grid container p={1} spacing={1} justifyContent={"flex-end"}>
        <Grid>
          <Stack direction={"row"} alignItems={"center"}>
            <Box
              component={"div"}
              sx={{
                height: "10px",
                backgroundColor: "lightgreen",
                width: "10px",
                borderRadius: "40px",
                mr: 1,
              }}
            />
            <Typography sx={customStyles?.textStyle}>User tasks</Typography>
          </Stack>
        </Grid>
        <Grid>
          <Stack direction={"row"} alignItems={"center"}>
            <Box
              component={"div"}
              sx={{
                height: "10px",
                backgroundColor: "red",
                width: "10px",
                borderRadius: "40px",
                mr: 1,
              }}
            />
            <Typography sx={customStyles?.textStyle}>Group tasks</Typography>
          </Stack>
        </Grid>
      </Grid>

      {/* Rendering the Dropdown forms here */}
      <Grid container p={1}>
        <Grid size={{ xs: 12 }}>
          <select
            value={selectedSchema}
            onChange={handleSchemaSelect}
            style={{ width: "100%", lineHeight: "1.5", padding: "8px" }}
          >
            <option value="" disabled>
              Select schema
            </option>

            {dropdownOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Grid>
      </Grid>

      <Grid container p={1} mt={2}>
        <Grid>
          {/* Button to add the schema */}
          <Button
            onClick={addNewSchema}
            variant="none"
            sx={{ color: "#45B08C", textTransform: "none" }}
            startIcon={<AddIcon fontSize="small" sx={{ color: "#45b08c" }} />}
          >
            Add new schema
          </Button>
        </Grid>
      </Grid>

      {/* Mapping the inputs here */}
      <div className="blue-box">
        {selectedSchemas.length > 0 &&
          selectedSchemas.map((schema, index) => (
            <Grid container key={index} my={1}>
              <Grid size={{ xs: 12 }}>
                <select
                  style={{ width: "100%", lineHeight: "1.5", padding: "8px" }}
                  value={schema.value}
                  onChange={(e) => {
                    const newSchemas = [...selectedSchemas];
                    newSchemas[index] = dropdownOptions.find(
                      (option) => option.value === e.target.value
                    );
                    setSelectedSchemas(newSchemas);
                  }}
                >
                  {/* Mapping the label here */}
                  <option value={schema.value}>{schema.label}</option>
                  {dropdownOptions
                    .filter(
                      (option) =>
                        !selectedSchemas.some((s) => s.value === option.value)
                    )
                    .map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                </select>
              </Grid>
            </Grid>
          ))}
      </div>

      <Grid container p={1} mt={4}>
        {/* Submit button to add the schema */}
        <Grid>
          <Button
            size="small"
            variant="contained"
            sx={{
              color: "#fff",
              backgroundColor: "#45b08c",
              textTransform: "none",
            }}
            onClick={handleSaveSegment}
          >
            Save the segment
          </Button>
        </Grid>
        <Grid>
          {/* Cancel Button */}
          <Button
            size="small"
            variant="outlined"
            sx={{ color: "red", border: "1px solid red", ml: 2 }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default FormDrawer;

//Custom styles
const customStyles = {
  textStyle: {
    fontSize: "0.8rem",
    fontWeight: "600",
    color: "#0009",
  },
};

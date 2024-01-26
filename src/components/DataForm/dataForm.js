import React, { useState } from "react";
import { FormControl, InputLabel, TextField, Select, MenuItem, Button, Grid } from "@mui/material";
import classes from './dataForm.module.css';

const DataForm = props => {
  const { handleSubmit, handleClose } = props
  const [formData, setFormData] = useState({
    fullname: "",
    gender: "",
    age: "",
    class: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, formData)}>
      <FormControl>
        <Grid container spacing={2} className={classes.formContainer}>
          <Grid item xs={12} md={6}>
            <TextField
              id="name-input"
              name="fullname"
              label="Full Name"
              fullWidth
              value={formData.fullname}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="gender-select-label">Gender</InputLabel>
              <Select
                labelId="gender-select-label"
                id="gender-select"
                fullWidth
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              id="age-input"
              label="Age"
              fullWidth
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              id="class-input"
              label="Class"
              fullWidth
              name="class"
              value={formData.class}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} className={classes.submitButton}>
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default DataForm;

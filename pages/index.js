// react
import { useState } from "react";
// mui
import { Box, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography } from "@mui/material";

export default function Home() {
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);

  const genderChangeHandler = (event, value) => {
    setGender(value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormControl fullWidth>
        <FormLabel sx={{ fontWeight: "bold" }}>Gender</FormLabel>
        <RadioGroup row value={gender} onChange={genderChangeHandler}>
          <FormControlLabel value="boy" control={<Radio />} label="Boy" />
          <FormControlLabel value="girl" control={<Radio />} label="Girl" />
          <FormControlLabel value="both" control={<Radio />} label="Both" />
        </RadioGroup>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel sx={{ fontWeight: "bold" }}>Age</InputLabel>
        <Select value={age} label="Age" onChange={ageChangeHandler}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

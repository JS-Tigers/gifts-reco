// react
import { useState } from "react";
// mui
import { Autocomplete, Box, Button, Card, Chip, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, useMediaQuery } from "@mui/material";

export default function Home() {
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);

  const genderChangeHandler = (event, value) => {
    setGender(value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const breakpoint = useMediaQuery("max-width: 720px");

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "var(--dark)",
      }}
    >
      <Card variant="outlined" raised sx={{ width: 500, padding: 3 }}>
        <FormControl>
          <FormLabel sx={{ fontWeight: "bold", textAlign: "center" }}>Gender</FormLabel>
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
        <Autocomplete
          key="likes"
          freeSolo
          multiple
          options={[]}
          defaultValue={[]}
          renderTags={(value, getTagProps) => value.map((option, index) => <Chip variant="outlined" label={option} {...getTagProps({ index })} />)}
          renderInput={(params) => <TextField {...params} label="Likes" placeholder="(optional)" />}
        />
        <Autocomplete
          key="dislikes"
          freeSolo
          multiple
          options={[]}
          defaultValue={[]}
          renderTags={(value, getTagProps) => value.map((option, index) => <Chip variant="outlined" label={option} {...getTagProps({ index })} />)}
          renderInput={(params) => <TextField {...params} label="Dislikes" placeholder="(optional)" />}
        />
        <Button variant="contained">Submit</Button>
      </Card>
    </Box>
  );
}

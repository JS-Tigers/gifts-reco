// mui
import {
  Autocomplete,
  Button,
  Card,
  Chip,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function Main(props) {
  const ageMenuItems = Array.from({ length: 10 }).map((val, index) => {
    return (
      <MenuItem key={index} value={index + 1}>
        {index + 1}
      </MenuItem>
    );
  });

  const genderChangeHandler = (event) => {
    props.setGenderError(false);
    props.setGender(event.target.value);
  };

  const ageChangeHandler = (event) => {
    props.setAgeError(false);
    props.setAge(event.target.value);
  };

  const likesChangeHandler = (event) => {
    let arr = event.target.value.split(",").filter((ele) => ele && ele.trim());
    props.setLikes(arr);
  };

  const dislikesChangeHandler = (event) => {
    let arr = event.target.value.split(",").filter((ele) => ele && ele.trim());
    props.setDislikes(arr);
  };

  return (
    <Card variant="outlined" sx={{ position: "relative", width: props.breakpoint ? "100%" : 800, padding: 4, borderRadius: 3 }}>
      <Stack spacing={2}>
        <Typography align="center" fontSize={25}>
          Show me gifts for&#58;
        </Typography>
        <Stack direction={props.breakpoint ? "column" : "row"} spacing={2}>
          <FormControl fullWidth error={props.genderError}>
            <InputLabel sx={{ fontWeight: props.boldLabels && "bold" }}>Gender</InputLabel>
            <Select value={props.gender} label="Gender" onChange={genderChangeHandler}>
              <MenuItem value={"boy"}>Boy</MenuItem>
              <MenuItem value={"girl"}>Girl</MenuItem>
              <MenuItem value={"both"}>Both</MenuItem>
            </Select>
            {props.genderError && <FormHelperText>Required</FormHelperText>}
          </FormControl>
          <FormControl fullWidth error={props.ageError}>
            <InputLabel sx={{ fontWeight: props.boldLabels && "bold" }}>Age</InputLabel>
            <Select value={props.age} label="Age" onChange={ageChangeHandler}>
              {ageMenuItems}
            </Select>
            {props.ageError && <FormHelperText>Required</FormHelperText>}
          </FormControl>
        </Stack>
        <Stack direction={props.breakpoint ? "column" : "row"} spacing={2}>
          <TextField
            fullWidth
            variant="outlined"
            onChange={likesChangeHandler}
            InputLabelProps={{ style: { fontWeight: props.boldLabels && "bold" } }}
            label="Who likes"
            placeholder="comma separated values (like car, doll)"
          />
          <TextField
            fullWidth
            variant="outlined"
            onChange={dislikesChangeHandler}
            InputLabelProps={{ style: { fontWeight: props.boldLabels && "bold" } }}
            label="& dislikes"
            placeholder="comma separated values (like chess, art)"
          />
        </Stack>
        <Typography align="center">
          <Button variant="contained" size="large" onClick={props.submitHandler} sx={{ fontWeight: props.boldLabels && "bold" }}>
            Submit
          </Button>
        </Typography>
      </Stack>
    </Card>
  );
}

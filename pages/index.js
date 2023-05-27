// react
import { useState } from "react";
// mui
import { Box, useMediaQuery } from "@mui/material";
// axios
import axios from "axios";
// components
import Main from "../components/main/Main";
import ProductsDisplay from "../components/products/ProductsDisplay";

export default function Home() {
  const [mainView, setMainView] = useState(true);

  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);

  const [genderError, setGenderError] = useState(false);
  const [ageError, setAgeError] = useState(false);

  const [products, setProducts] = useState([]);

  const breakpoint = useMediaQuery("(max-width: 800px)");
  const boldLabels = true;

  const submitHandler = async () => {
    if (gender == "") setGenderError(true);
    if (age == "") setAgeError(true);

    if (gender && age) {
      const response = await axios
        .post("/api/data", { gender, age, likes, dislikes })
        .then((res) => res.data)
        .catch((err) => console.log(err));

      setProducts(response);

      setGender("");
      setAge("");
      setLikes([]);
      setDislikes([]);
      setMainView(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "var(--bg)",
        overflowX: "hidden",
        paddingY: 5,
      }}
    >
      {mainView ? (
        <Main
          gender={gender}
          setGender={setGender}
          age={age}
          setAge={setAge}
          genderError={genderError}
          setGenderError={setGenderError}
          likes={likes}
          setLikes={setLikes}
          dislikes={dislikes}
          setDislikes={setDislikes}
          ageError={ageError}
          setAgeError={setAgeError}
          breakpoint={breakpoint}
          boldLabels={boldLabels}
          submitHandler={submitHandler}
        />
      ) : (
        <ProductsDisplay products={products} setMainView={setMainView} breakpoint={breakpoint} />
      )}
    </Box>
  );
}

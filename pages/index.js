// react
import { useEffect, useState } from "react";
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

  // useEffect(() => {
  //   setProducts([
  //     {
  //       _id: { $oid: "643e85887e5482d9a5f547ab" },
  //       gender: "boy",
  //       age: 8,
  //       category: "toys",
  //       platform: "amazon",
  //       product_name:
  //         "Melissa & Doug Play Money Set - Educational Toy With Paper Bills and Plastic Coins (50 of each denomination) and Wooden Cash Drawer for Storage",
  //       image_link: "https://m.media-amazon.com/images/I/81oDPM9ACxL._AC_UL320_.jpg",
  //       price: 27.99,
  //       delivery_tagline: "Check Retailer site for delivery info",
  //       delivery_days: -1,
  //       average_rating: 4.8,
  //       buy_link: "https://www.amazon.com/Melissa-Doug-Play-Money-Set/dp/1223080439/ref=sr_1_284?keywords=toys+8+year+boy&qid=1675077220&sr=8-284",
  //       ratings_total: 4427,
  //       product_id: "A-1223080439",
  //       last_updated_on: 1675077346148,
  //       brands: "melissa & doug",
  //       characters: "",
  //       product_categories: "educational toy,paper bills,plastic coins,wooden cash drawer",
  //       tags: "melissa & doug educational toy,educational toy,melissa & doug paper bills toy,paper bills toy,melissa & doug plastic coins toy,plastic coins toy,melissa & doug wooden cash drawer toy,wooden cash drawer toy,melissa & doug toy",
  //       product_name_cleaned: "Melissa & Doug Play Money Set - Educational Toy ...",
  //       google_trend: 19,
  //       twitter_trend: 0,
  //       overall_rating: 21249.6,
  //     },
  //     {
  //       _id: { $oid: "643e85887e5482d9a5f547ab" },
  //       gender: "boy",
  //       age: 8,
  //       category: "toys",
  //       platform: "amazon",
  //       product_name:
  //         "Melissa & Doug Play Money Set - Educational Toy With Paper Bills and Plastic Coins (50 of each denomination) and Wooden Cash Drawer for Storage",
  //       image_link: "https://m.media-amazon.com/images/I/81oDPM9ACxL._AC_UL320_.jpg",
  //       price: 27.99,
  //       delivery_tagline: "Check Retailer site for delivery info",
  //       delivery_days: -1,
  //       average_rating: 4.8,
  //       buy_link: "https://www.amazon.com/Melissa-Doug-Play-Money-Set/dp/1223080439/ref=sr_1_284?keywords=toys+8+year+boy&qid=1675077220&sr=8-284",
  //       ratings_total: 4427,
  //       product_id: "A-1223080439",
  //       last_updated_on: 1675077346148,
  //       brands: "melissa & doug",
  //       characters: "",
  //       product_categories: "educational toy,paper bills,plastic coins,wooden cash drawer",
  //       tags: "melissa & doug educational toy,educational toy,melissa & doug paper bills toy,paper bills toy,melissa & doug plastic coins toy,plastic coins toy,melissa & doug wooden cash drawer toy,wooden cash drawer toy,melissa & doug toy",
  //       product_name_cleaned: "Melissa & Doug Play Money Set - Educational Toy ...",
  //       google_trend: 19,
  //       twitter_trend: 0,
  //       overall_rating: 21249.6,
  //     },
  //     {
  //       _id: { $oid: "643e85887e5482d9a5f547ab" },
  //       gender: "boy",
  //       age: 8,
  //       category: "toys",
  //       platform: "amazon",
  //       product_name:
  //         "Melissa & Doug Play Money Set - Educational Toy With Paper Bills and Plastic Coins (50 of each denomination) and Wooden Cash Drawer for Storage",
  //       image_link: "https://m.media-amazon.com/images/I/81oDPM9ACxL._AC_UL320_.jpg",
  //       price: 27.99,
  //       delivery_tagline: "Check Retailer site for delivery info",
  //       delivery_days: -1,
  //       average_rating: 4.8,
  //       buy_link: "https://www.amazon.com/Melissa-Doug-Play-Money-Set/dp/1223080439/ref=sr_1_284?keywords=toys+8+year+boy&qid=1675077220&sr=8-284",
  //       ratings_total: 4427,
  //       product_id: "A-1223080439",
  //       last_updated_on: 1675077346148,
  //       brands: "melissa & doug",
  //       characters: "",
  //       product_categories: "educational toy,paper bills,plastic coins,wooden cash drawer",
  //       tags: "melissa & doug educational toy,educational toy,melissa & doug paper bills toy,paper bills toy,melissa & doug plastic coins toy,plastic coins toy,melissa & doug wooden cash drawer toy,wooden cash drawer toy,melissa & doug toy",
  //       product_name_cleaned: "Melissa & Doug Play Money Set - Educational Toy ...",
  //       google_trend: 19,
  //       twitter_trend: 0,
  //       overall_rating: 21249.6,
  //     },
  //   ]);
  // }, []);

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

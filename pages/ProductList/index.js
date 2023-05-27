// react
import { useState } from "react";
// mui
import { Box } from "@mui/material";

//Custom Imports //
import Product from "../components/Product";

let products = [{
  _id: { '$oid': '643e85887e5482d9a5f547ab' },
  gender: 'boy',
  age: 8,
  category: 'toys',
  platform: 'amazon',
  product_name: 'Melissa & Doug Play Money Set - Educational Toy With Paper Bills and Plastic Coins (50 of each denomination) and Wooden Cash Drawer for Storage',
  image_link: 'https://m.media-amazon.com/images/I/81oDPM9ACxL._AC_UL320_.jpg',
  price: 27.99,
  delivery_tagline: 'Check Retailer site for delivery info',
  delivery_days: -1,
  average_rating: 4.8,
  buy_link: 'https://www.amazon.com/Melissa-Doug-Play-Money-Set/dp/1223080439/ref=sr_1_284?keywords=toys+8+year+boy&qid=1675077220&sr=8-284',
  ratings_total: 4427,
  product_id: 'A-1223080439',
  last_updated_on: 1675077346148,
  brands: 'melissa & doug',
  characters: '',
  product_categories: 'educational toy,paper bills,plastic coins,wooden cash drawer',
  tags: 'melissa & doug educational toy,educational toy,melissa & doug paper bills toy,paper bills toy,melissa & doug plastic coins toy,plastic coins toy,melissa & doug wooden cash drawer toy,wooden cash drawer toy,melissa & doug toy',
  product_name_cleaned: 'Melissa & Doug Play Money Set - Educational Toy ...',
  google_trend: 19,
  twitter_trend: 0,
  overall_rating: 21249.6
}, {
  _id: { '$oid': '643e85887e5482d9a5f547ab' },
  gender: 'boy',
  age: 8,
  category: 'toys',
  platform: 'amazon',
  product_name: 'Melissa & Doug Play Money Set - Educational Toy With Paper Bills and Plastic Coins (50 of each denomination) and Wooden Cash Drawer for Storage',
  image_link: 'https://m.media-amazon.com/images/I/81oDPM9ACxL._AC_UL320_.jpg',
  price: 27.99,
  delivery_tagline: 'Check Retailer site for delivery info',
  delivery_days: -1,
  average_rating: 4.8,
  buy_link: 'https://www.amazon.com/Melissa-Doug-Play-Money-Set/dp/1223080439/ref=sr_1_284?keywords=toys+8+year+boy&qid=1675077220&sr=8-284',
  ratings_total: 4427,
  product_id: 'A-1223080439',
  last_updated_on: 1675077346148,
  brands: 'melissa & doug',
  characters: '',
  product_categories: 'educational toy,paper bills,plastic coins,wooden cash drawer',
  tags: 'melissa & doug educational toy,educational toy,melissa & doug paper bills toy,paper bills toy,melissa & doug plastic coins toy,plastic coins toy,melissa & doug wooden cash drawer toy,wooden cash drawer toy,melissa & doug toy',
  product_name_cleaned: 'Melissa & Doug Play Money Set - Educational Toy ...',
  google_trend: 19,
  twitter_trend: 0,
  overall_rating: 21249.6
}, {
  _id: { '$oid': '643e85887e5482d9a5f547ab' },
  gender: 'boy',
  age: 8,
  category: 'toys',
  platform: 'amazon',
  product_name: 'Melissa & Doug Play Money Set - Educational Toy With Paper Bills and Plastic Coins (50 of each denomination) and Wooden Cash Drawer for Storage',
  image_link: 'https://m.media-amazon.com/images/I/81oDPM9ACxL._AC_UL320_.jpg',
  price: 27.99,
  delivery_tagline: 'Check Retailer site for delivery info',
  delivery_days: -1,
  average_rating: 4.8,
  buy_link: 'https://www.amazon.com/Melissa-Doug-Play-Money-Set/dp/1223080439/ref=sr_1_284?keywords=toys+8+year+boy&qid=1675077220&sr=8-284',
  ratings_total: 4427,
  product_id: 'A-1223080439',
  last_updated_on: 1675077346148,
  brands: 'melissa & doug',
  characters: '',
  product_categories: 'educational toy,paper bills,plastic coins,wooden cash drawer',
  tags: 'melissa & doug educational toy,educational toy,melissa & doug paper bills toy,paper bills toy,melissa & doug plastic coins toy,plastic coins toy,melissa & doug wooden cash drawer toy,wooden cash drawer toy,melissa & doug toy',
  product_name_cleaned: 'Melissa & Doug Play Money Set - Educational Toy ...',
  google_trend: 19,
  twitter_trend: 0,
  overall_rating: 21249.6
}]

export default function ProductList() {

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        columnGap:'10px'
      }}
    >
      {products.map((product) => {
        return (
          <Product
            key={product._id}
            id={product._id}
            product_name={product.product_name}
            average_rating={product.average_rating}
            price={product.price}
            image_link={product.image_link}
            delivery_tagline={product.delivery_tagline}
            buy_link={product.buy_link}
            platform={product.platform}
            brands={product.brands}
            characters={product.characters}
            category={product.product_categories}
            tags={product.tags}
          />)
      })}

    </Box>
  );
}

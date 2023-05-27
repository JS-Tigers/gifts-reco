// mui
import { Button, Stack, Typography } from "@mui/material";
// mui-icons
import { Reply } from "@mui/icons-material";
// components
import Product from "./Product";

export default function ProductsDisplay(props) {
  return (
    <Stack>
      <Typography>
        <Button
          startIcon={<Reply />}
          onClick={() => props.setMainView(true)}
          variant="contained"
          color="warning"
          sx={{
            borderRadius: 3,
          }}
        >
          Back to Search
        </Button>
      </Typography>
      <br />
      <Stack direction={props.breakpoint ? "column" : "row"} spacing={3}>
        {props.products.map((product) => {
          return (
            <Product
              key={product._id}
              id={product._id}
              product_name_cleaned={product.product_name_cleaned}
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
            />
          );
        })}
      </Stack>
    </Stack>
  );
}

// ** React imports
import { useState, useEffect } from "react";

// ** Next imports
import { useRouter } from "next/router";


// ** MUI Imports
import {
  Grid,
  Typography,
  Box,
  Rating,
  Chip,
  Button,
  Card,
  CardHeader,
  CardContent,
  Checkbox,
} from "@mui/material";
import {
  MonetizationOnRounded,
  FavoriteBorder,
  Favorite,
} from "@mui/icons-material";


// ========================================== Component begins here =========================================================
const Product = (props) => {
  const router = useRouter();

  return (
    <Card
      sx={{
        width: 320,
        height: 530,
        position: "relative",
        overflow: "hidden",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        background: props.selected
          ? "var(--product_selection_color)"
          : "inherit",
      }}
    >
      <CardHeader
        sx={{ height: 100 }}
        title={
          <Typography
            variant="body1"
            sx={{ textAlign: "center", color: "#0a0908" }}
          >
            <strong>
              {props.product_name.length > 67
                ? props.product_name.slice(0, 67) + " ..."
                : props.product_name}
            </strong>
          </Typography>
        }
      />
      <Box position="absolute" sx={{ right: 10 }}>
        <Checkbox
          checked={props.checked}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          onChange={(e) => props.checkedHandler(e, props.id)}
          sx={{ "&.Mui-checked": { color: "var(--product_like_color)" } }}
        />
      </Box>
      {router.pathname == "/admin" && (
        <Box position="absolute" sx={{ left: 10 }}>
          <Checkbox
            checked={props.selected}
            onChange={(e, checked) =>
              props.handleProductSelection(checked, props.id)
            }
            sx={{ "&.Mui-checked": { color: "var(--product_checkbox_color)" } }}
          />
        </Box>
      )}

      <CardContent>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} sx={{ height: 220 }}>
            <Box display="flex" justifyContent="center">
              <img
                src={props.image_link}
                alt="image"
                width={180}
                height={180}
              />
            </Box>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Rating
              defaultValue={props.average_rating}
              precision={0.1}
              readOnly
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            alignItems="center"
          >
            <MonetizationOnRounded
              sx={{ fontSize: "1.9rem", color: "var(--currency_icon_color)" }}
            />
            <Typography variant="h6">
              <strong>{props.price}</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Chip
              size="small"
              label={
                <Typography variant="body2">
                  {props.delivery_tagline}
                </Typography>
              }
              variant="outlined"
              color={
                props.delivery_tagline.includes("Check Retailer")
                  ? "error"
                  : "success"
              }
            />
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Button
              href={props.buy_link}
              size="small"
              target="_blank"
              rel="noreferrer"
              variant="contained"
              sx={{
                backgroundColor: "#000000",
                borderRadius: 50,
                px: 2,
                py: 0.5,
                fontFamily: "'Anton', sans-serif !important",
                fontSize: "1rem",
                color: "#ED5E93",
                fontWeight: 800,
                "&:hover": { backgroundColor: "#000000" },
              }}
            >
              Buy Now
            </Button>
          </Grid>
        </Grid>
        <Box
          position="absolute"
          sx={{
            bottom: -11,
            right: -11,
            p: 2,
          }}
        >
          <Box
            position="absolute"
            sx={{
              backgroundColor: props.buy_link.includes("amazon")
                ? "#D3FBD8"
                : props.buy_link.includes("target")
                ? "#16425b"
                : "#252422",
              borderRadius: "50%",
              width: 70,
              height: 70,
              transform: "scale(1.5)",
            }}
          ></Box>
          <img
            src={`/${props.platform}.png`}
            alt={props.platform}
            width={35}
            style={{ zIndex: 10, position: "relative" }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Product;

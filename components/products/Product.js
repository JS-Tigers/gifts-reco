// mui
import { Grid, Typography, Box, Rating, Chip, Button, Card, CardHeader, CardContent } from "@mui/material";
// mui-icons
import { CurrencyRupee, MonetizationOnRounded } from "@mui/icons-material";

// ========================================== Component begins here =========================================================
const Product = (props) => {
  return (
    <Card
      sx={{
        width: 320,
        height: 530,
        borderRadius: 3,
        position: "relative",
        overflow: "hidden",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
    >
      <CardHeader
        sx={{ height: 100 }}
        title={
          <Typography variant="body1" sx={{ textAlign: "center", color: "#0a0908" }}>
            <strong>{props.product_name.length > 67 ? props.product_name.slice(0, 67) + " ..." : props.product_name}</strong>
          </Typography>
        }
      />
      <CardContent>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} sx={{ height: 220 }}>
            <Box display="flex" justifyContent="center">
              <img src={props.image_link} alt="image" width={180} height={180} />
            </Box>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Rating defaultValue={props.average_rating} precision={0.1} readOnly />
          </Grid>
          <Grid item container xs={12} justifyContent="center" alignItems="center">
            {props.currency_symbol == "$" ? (
              <MonetizationOnRounded sx={{ fontSize: "1.9rem", color: "var(--secondary)" }} />
            ) : (
              <CurrencyRupee sx={{ fontSize: "1.9rem", color: "var(--secondary)" }} />
            )}
            <Typography variant="h6">
              <strong>{props.price}</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Chip
              size="small"
              label={<Typography variant="body2">{props.delivery_tagline}</Typography>}
              variant="outlined"
              color={props.delivery_tagline.includes("Check Retailer") ? "error" : "success"}
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
                backgroundColor: "var(--tertiary)",
                borderRadius: 50,
                px: 2,
                py: 0.5,
                fontSize: "1rem",
                color: "#fff",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "var(--primary)", color: "#000" },
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
              backgroundColor: props.buy_link.includes("amazon") ? "#D3FBD8" : props.buy_link.includes("target") ? "#16425b" : "#252422",
              borderRadius: "50%",
              width: 70,
              height: 70,
              transform: "scale(1.5)",
            }}
          ></Box>
          <img src={`/${props.platform}.png`} alt={props.platform} width={35} style={{ zIndex: 10, position: "relative" }} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Product;

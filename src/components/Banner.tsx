import { Box } from "@mui/material";

const Banner = () => {
  const imageBasePath = import.meta.env.BASE_URL;
  const imageUrl = `${imageBasePath}logos/main.svg`;
  return (
    <Box
      sx={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat", // Prevents repetition
        // backgroundSize: "cover", // Ensures the image covers the container
        backgroundPosition: "center", // Centers the image
        height: "50vh", // Full viewport height
        // padding: "4rem 2rem",
        textAlign: "center",
        borderRadius: "8px",
      }}
    >
      {/* <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ fontWeight: "bold" }} // Make font bold
      >
        Indian Building Company
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ marginBottom: 2, fontWeight: 600 }} // Semi-bold for subtitle
      >
        Bringing Excellence to Every Service We Offer
      </Typography> */}
    </Box>
  );
};

export default Banner;

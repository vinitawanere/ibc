import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface AboutProps {
  imagePath: string;
  title: string;
  description: string;
}
const About: React.FC<AboutProps> = ({ imagePath, title, description }) => {
  const imageBasePath = import.meta.env.BASE_URL;
  return (
    <Card
      sx={{
        maxWidth: "800px",
        margin: "2rem auto",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        overflow: "hidden",
        backgroundColor: "#E4DFDA",
      }}
    >
      <CardMedia
        component="img"
        image={`${imageBasePath}${imagePath}`}
        alt={title}
        sx={{
          width: "100%", // Make the image take up the full width
          height: "auto", // Allow the height to scale according to the image's aspect ratio
          objectFit: "contain", // Ensures the whole image is visible
        }}
      />
      <CardContent sx={{ padding: "1.5rem" }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "#555",
            textAlign: "justify",
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default About;

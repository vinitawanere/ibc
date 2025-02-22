import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, CardMedia, IconButton, Modal, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export interface GalleryItem {
  type: string;
  src: string;
  alt: string;
}

export default function Carousel({
  galleryItems,
}: {
  galleryItems: GalleryItem[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setLightboxOpen] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const currentItem = galleryItems[currentIndex];
  const imageBasePath = import.meta.env.BASE_URL;

  return (
    <>
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          Yoga Training
        </Typography>
        <Typography variant="body1" gutterBottom>
        Welcome to our Yoga Training program, where we offer a holistic approach to mastering the art of yoga. Whether you're a beginner or an experienced practitioner, our classes are designed to deepen your practice, enhance your knowledge, and empower you to teach with confidence. With expert guidance, personalized instruction, and a supportive community, you'll gain the tools needed to unlock your potential both on and off the mat. Join us and embark on a transformative journey to balance, strength, and mindfulness.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 4,
        }}
      >
        <IconButton onClick={handlePrev}>
          <ArrowBackIosIcon />
        </IconButton>

        <Box
          sx={{
            width: "80%",
            height: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.div
            key={currentIndex}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => setLightboxOpen(true)}
          >
            {currentItem.type === "image" ? (
              <CardMedia
                component="img"
                image={`${imageBasePath}${currentItem.src}`}
                alt={currentItem.alt}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            ) : (
              <CardMedia
                component="video"
                src={currentItem.src}
                controls
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            )}
          </motion.div>
        </Box>

        <IconButton onClick={handleNext}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        {galleryItems.map((_, index) => (
          <IconButton
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              color: index === currentIndex ? "primary.main" : "grey.500",
            }}
          >
            <CircleIcon fontSize="small" />
          </IconButton>
        ))}
      </Box>

      <Modal
        open={isLightboxOpen}
        onClose={() => setLightboxOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            width: "90%",
            height: "90%",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {currentItem.type === "image" ? (
            <CardMedia
              component="img"
              image={`${imageBasePath}${currentItem.src}`}
              alt={currentItem.alt}
              sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
            />
          ) : (
            <CardMedia
              sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/hwGWcGGqKis?si=RsOYoGCCNqmAAG-S"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </CardMedia>
          )}
        </Box>
      </Modal>
    </>
  );
}
// <!-- component="video" // src={currentItem.src} controls sx= -->

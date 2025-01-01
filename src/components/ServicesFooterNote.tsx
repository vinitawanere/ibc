import { Box } from "@mui/material";

const ServicesFooterNote = () => {
  return (
    <Box
      sx={{
        position: "relative",
        right: "0",
        padding: "1rem",
        textAlign: "center",
        fontSize: "0.875rem",
        color: "#333",
        bottom: 0,
      }}
    >
      Note: Items marked with <strong>*</strong> are not currently in service
      and will be available soon.
    </Box>
  );
};

export default ServicesFooterNote;

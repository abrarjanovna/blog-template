import { Box, Container, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary">
          Something here to give the footer a purpose! <br /> Copyright ©{" "}
          <Link
            href="https://mui.com/"
            sx={{
              color: "text.secondary",
              textDecorationColor: "#b7b7b7",
            }}
          >
            Your Website
          </Link>{" "}
          2023.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

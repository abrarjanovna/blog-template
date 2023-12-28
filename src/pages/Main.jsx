import { Box, Container, Link, Paper, Typography } from "@mui/material";
import image from "../assets/image.jpg";

const Main = () => {
  return (
    <Container>
      <Paper
        sx={{
          position: "relative",
          backgroundImage: `url(${image})`,
          color: "#fff",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            position: "relative",
            p: { xs: 3, md: 6 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mb: 2,
            }}
          >
            Title of a longer featured <br /> blog post
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
            }}
          >
            Multiple lines of text that form the lede, informing <br /> new
            readers quickly and efficiently about what's <br /> most interesting
            in this post's contents.
          </Typography>
          <Link
            underline="always"
            href="#"
            sx={{
              fontFamily: "sans-serif",
            }}
          >
            Continue reading…
          </Link>
        </Box>
      </Paper>
    </Container>
  );
};

export default Main;

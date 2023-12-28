import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import image from "../assets/image.jpg";

const Posts = () => {
  return (
    <Container sx={{ display: "flex" }}>
      <CardActionArea href="#" sx={{ mt: 4, width: 600 }}>
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              Featured post
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Nov 12
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 1.5 }}>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={image}
          />
        </Card>
      </CardActionArea>
      <CardActionArea href="#" sx={{ mt: 4, width: 600, ml: 4 }}>
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              Featured post
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Nov 12
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 1.5 }}>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={image}
          />
        </Card>
      </CardActionArea>
    </Container>
  );
};

export default Posts;

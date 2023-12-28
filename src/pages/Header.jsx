import { Button, Container, IconButton, Link, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <Container>
      <Toolbar sx={{ borderBottom: 1, borderColor: "#ddd" }}>
        <Button>Subscribe</Button>
        <Typography
          variant="h5"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Blog
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        <Link
          color="inherit"
          variant="body2"
          noWrap
          sx={{ p: 1, flexShrink: 0, cursor: "pointer" }}
          href="#"
        >
          Technology
        </Link>
        <Link
          color="inherit"
          variant="body2"
          noWrap
          sx={{ p: 1, flexShrink: 0, cursor: "pointer" }}
          href="#"
        >
          Design
        </Link>
        <Link
          color="inherit"
          variant="body2"
          noWrap
          sx={{ p: 1, flexShrink: 0, cursor: "pointer" }}
          href="#"
        >
          Culture
        </Link>
        <Link
          color="inherit"
          variant="body2"
          noWrap
          sx={{ p: 1, flexShrink: 0, cursor: "pointer" }}
          href="#"
        >
          Business
        </Link>
        <Link
          color="inherit"
          variant="body2"
          noWrap
          sx={{ p: 1, flexShrink: 0, cursor: "pointer" }}
          href="#"
        >
          Politics
        </Link>
        <Link
          color="inherit"
          variant="body2"
          noWrap
          sx={{ p: 1, flexShrink: 0, cursor: "pointer" }}
          href="#"
        >
          Opinion
        </Link>
        <Link
          color="inherit"
          variant="body2"
          noWrap
          sx={{ p: 1, flexShrink: 0, cursor: "pointer" }}
          href="#"
        >
          Science
        </Link>
        <Link
          color="inherit"
          variant="body2"
          noWrap
          sx={{ p: 1, flexShrink: 0, cursor: "pointer" }}
          href="#"
        >
          Health
        </Link>
        <Link
          color="inherit"
          variant="body2"
          noWrap
          sx={{ p: 1, flexShrink: 0, cursor: "pointer" }}
          href="#"
        >
          Style
        </Link>
        <Link
          color="inherit"
          variant="body2"
          noWrap
          sx={{ p: 1, flexShrink: 0, cursor: "pointer" }}
          href="#"
        >
          Travel
        </Link>
      </Toolbar>
    </Container>
  );
};

export default Header;

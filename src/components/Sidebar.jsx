import { Container, Link, Paper, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/Github";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";

const Sidebar = () => {
  return (
    <div>
      <Container sx={{ mt: -15 }} xs={12} md={4}>
        <Paper
          elevation={0}
          sx={{ p: 2, bgcolor: "grey.200", width: 325, ml: 97 }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
            <b>About</b>
          </Typography>
          <Typography>
            Etiam porta sem malesuada magna mollis euismod. Cras mattis
            consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
            sed consectetur.
          </Typography>
        </Paper>
        <Typography variant="h6" gutterBottom sx={{ mt: 3, ml: 97 }}>
          <b>Archives</b>
        </Typography>
        <div style={{ marginLeft: "775px" }}>
          <Link display="block" variant="body1" href="#">
            March<span style={{ color: "#fff" }}>.</span>2020
          </Link>
          <Link variant="body1" href="#">
            February<span style={{ color: "#fff" }}>.</span>2020
          </Link>
          <Link display="block" variant="body1" href="#">
            January<span style={{ color: "#fff" }}>.</span>2020
          </Link>
          <Link display="block" variant="body1" href="#">
            November<span style={{ color: "#fff" }}>.</span>1999
          </Link>
          <Link variant="body1" href="#">
            October<span style={{ color: "#fff" }}>.</span>1999
          </Link>
          <Link display="block" variant="body1" href="#">
            September<span style={{ color: "#fff" }}>.</span>1999
          </Link>
          <Link variant="body1" href="#">
            August<span style={{ color: "#fff" }}>.</span>1999
          </Link>
          <Link display="block" variant="body1" href="#">
            July<span style={{ color: "#fff" }}>.</span>1999
          </Link>
          <Link variant="body1" href="#">
            June<span style={{ color: "#fff" }}>.</span>1999
          </Link>
          <Link display="block" variant="body1" href="#">
            May<span style={{ color: "#fff" }}>.</span>1999
          </Link>
          <Link variant="body1" href="#">
            April<span style={{ color: "#fff" }}>.</span>1999
          </Link>
          <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
            <b>Social</b>
          </Typography>
          <Link display="block" variant="body1" href="#">
            <Stack direction="row" alignItems="center">
              <GitHubIcon />
              <span style={{ marginLeft: "7px" }}>GitHub</span>
            </Stack>
            <Stack direction="row" alignItems="center">
              <XIcon />
              <span style={{ marginLeft: "7px" }}>X</span>
            </Stack>
            <Stack direction="row" alignItems="center">
              <FacebookIcon />
              <span style={{ marginLeft: "7px" }}>Facebook</span>
            </Stack>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Sidebar;

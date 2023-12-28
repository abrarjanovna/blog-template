import { Container, Divider, Link, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

const Post = () => {
  return (
    <Container
      sx={{
        mt: 8,
        width: "800px",
        marginLeft: "150px",
      }}
    >
      <Typography variant="h6" sx={{ mb: 1 }}>
        From the firehose
      </Typography>
      <Divider />
      <Typography variant="h4" sx={{ mt: 3 }}>
        Sample blog post
      </Typography>
      <Sidebar />
      <div style={{ marginTop: "-495px" }}>
        <i style={{ fontSize: "18px" }}>
          April 1, 2020 by <Link href="https://mui.com/">Olivier</Link>
        </i>
        <Typography sx={{ mt: 3 }}>
          This blog post shows a few different types of content that are
          supported and styled with Material styles. Basic typography, images,
          and code are all supported. You can extend these by modifying{" "}
          <span style={{ fontFamily: "monospace" }}>Markdown.js.</span>
        </Typography>
        <Typography sx={{ mt: 3 }}>
          Cum socics natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia
          quam venenatis vestibulum. Sed posuere consectetur est at lobortis.
          Cras mattis consectetur purus sit amet fermentum.
        </Typography>
        <Typography sx={{ mt: 3 }}>
          Curabitur blandit tempus porttitor.{" "}
          <b>Nullam quis risus eget urna mollis</b> ornare vel eu leo. Nullam id
          dolor id nibh ultricies vehicula ut id elit.
        </Typography>
        <Typography sx={{ mt: 3 }}>
          Etiam porta sem malesuada magna mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
          sed consectetur.
        </Typography>
        <Typography variant="h6" sx={{ mt: 3 }}>
          <b>Heading</b>
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
          vestibulum at eros.
        </Typography>
        <Typography sx={{ mt: 3 }}>Sub-heading 1</Typography>
        <Typography sx={{ mt: 1 }}>
          Cum socics natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </Typography>
        <Typography sx={{ mt: 3 }}>Sub-heading 2</Typography>
        <Typography sx={{ mt: 1 }}>
          Cum socics natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
          porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
          cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          justo sit amet risus.
        </Typography>
        <Typography>
          <ul>
            <li style={{ marginBottom: "10px" }}>
              Present commodo cursus magna, vel scelerisque nisl consectetur et.
            </li>
            <li style={{ marginBottom: "10px" }}>
              Donec id elit non mi porta gravida at eget metus.
            </li>
            <li style={{ marginBottom: "10px" }}>
              Nulla vitae elit libero, a pharetra augue.
            </li>
          </ul>
        </Typography>
        <Typography>
          Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
          libero, a pharetra augue.
        </Typography>
        <Typography>
          <ul style={{ listStyle: "roman" }}>
            <li style={{ marginBottom: "10px" }}>
              Vestibulum id ligula porta felis euismod semper.
            </li>
            <li style={{ marginBottom: "10px" }}>
              Cum socics natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </li>
            <li style={{ marginBottom: "10px" }}>
              Maecenas sed diam eget risus varius blandit sit amet non magna.
            </li>
          </ul>
        </Typography>
        <Typography>
          Cras mattis consectetur purus sit amet fermentum. Sed posuere
          consectetur est at lobortis.
        </Typography>
      </div>
      <Typography variant="h4" sx={{ mt: 8, mb: 2 }}>
        Another blog post
      </Typography>
      <i style={{ fontSize: "18px" }}>
        March 23, 2020 by <Link href="https://mui.com/">Matt</Link>
      </i>
      <Typography sx={{ mt: 3 }}>
        Cum socics natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
        venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras
        mattis consectetur purus sit amet fermentum.
      </Typography>
      <Typography sx={{ mt: 3 }}>
        Curabitur blandit tempus porttitor.{" "}
        <b>Nullam quis risus eget urna mollis</b> ornare vel eu leo. Nullam id
        dolor id nibh ultricies vehicula ut id elit.
      </Typography>
      <Typography sx={{ mt: 3 }}>
        Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur
        purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
      </Typography>
      <Typography sx={{ mt: 1 }}>
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
        vestibulum at eros.
      </Typography>
      <Typography variant="h4" sx={{ mt: 8, mb: 2 }}>
        New feature
      </Typography>
      <i style={{ fontSize: "18px" }}>
        March 14, 2020 by <Link href="https://mui.com/">Tom</Link>
      </i>
      <Typography sx={{ mt: 1 }}>
        Cum socics natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
        porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
        cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
        sit amet risus.
      </Typography>
      <Typography>
        <ul>
          <li style={{ marginBottom: "10px" }}>
            Present commodo cursus magna, vel scelerisque nisl consectetur et.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Donec id elit non mi porta gravida at eget metus.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Nulla vitae elit libero, a pharetra augue.
          </li>
        </ul>
      </Typography>
      <Typography sx={{ mt: 3 }}>
        Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur
        purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
      </Typography>
      <Typography sx={{ mt: 2 }}>
        Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
        libero, a pharetra augue.
      </Typography>
    </Container>
  );
};

export default Post;

import { Grid, Typography, Link, Divider, IconButton } from "@mui/material";
import { Facebook, LinkedIn, Mail, Phone, Room } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f5f5f5",
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "3rem",
      }}
    >
      <Grid container spacing={3}>
        {/* Company Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "600", textAlign: "center" }}
          >
            Company
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            © 2023 Ful,Inc.
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            All rights reserved.
          </Typography>
          <Grid container spacing={1} style={{ justifyContent: "center" }}>
            <Grid item sx={{ justifyContent: "center" }}>
              <Link href="#">
                <IconButton>
                  <Facebook />
                </IconButton>
              </Link>
            </Grid>
            <Grid item>
              <Link href="#">
                <IconButton>
                  <LinkedIn />
                </IconButton>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        {/* Features Section */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6">Features</Typography>
          <Divider sx={{ marginBottom: "0.5rem" }} />
          <Link underline="none" href="#" color="black">
            Check Domain
          </Link>
          <br />
          <Link underline="none" href="#" color="black">
            Email Verification
          </Link>
          <br />
          <Link underline="none" href="#" color="black">
            Zone Files Downloads
          </Link>
          <br />
          <Link underline="none" href="#" color="black">
            Category Search
          </Link>
          <br />
          <Link underline="none" href="#" color="black">
            Technology Search
          </Link>
        </Grid>

        {/* Top Technology Reports Section */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6">Top Technology Reports</Typography>
          <Divider sx={{ marginBottom: "0.5rem" }} />
          <Link underline="none" href="#" color="black">
            Websites using Nginx
          </Link>
          <br />
          <Link underline="none" href="#" color="black">
            Websites using JQuery
          </Link>
          <br />
          <Link underline="none" href="#" color="black">
            Websites using MySQL
          </Link>
          <br />
          <Link underline="none" href="#" color="black">
            Websites using Shopify
          </Link>
          <br />
          <Link underline="none" href="#" color="black">
            Websites using WooCommerce
          </Link>
        </Grid>

        {/* More to Know Section */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6">More to Know</Typography>
          <Divider sx={{ marginBottom: "0.5rem" }} />
          <Link underline="none" href="#" color="black">
            Feature Comparisons
          </Link>
          <br />
          <Link underline="none" href="#" color="black">
            Pricing
          </Link>
          <br />
          <Link underline="none" href="#" color="black">
            Careers
          </Link>
          <br />
          <Link underline="none" href="#" color="black">
            Terms of Use
          </Link>
          <br />
          <Link underline="none" href="#" color="black">
            About Us
          </Link>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6">Contact</Typography>
          <Divider sx={{ marginBottom: "0.5rem" }} />
          <Link underline="none" href="mailto:support@ful.io" color="black">
            <Mail /> support@ful.io
          </Link>
          <br />
          <Link underline="none" href="telto:+13433036668" color="black">
            <Phone /> +13433036668
          </Link>
          <br />
          <Link
            underline="none"
            href="#"
            sx={{ alignItems: "center" }}
            color="black"
          >
            <Room /> Ful, Inc. 1207 Delaware Ave #348 Wilmington, DE 19806
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;

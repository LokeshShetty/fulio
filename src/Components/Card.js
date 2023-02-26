import React from "react";
import { Card, CardMedia, Typography, CardContent, Grid } from "@mui/material";

const FeatureCard = () => {
  const cardDetails = [
    [
      "https://d2liqc29oclqc9.cloudfront.net/images/Technology_Reports.png?auto=format&fit=max&w=256",
      "https://d2liqc29oclqc9.cloudfront.net/images/Email_&_Phone_Number_Lists.png?auto=format&fit=max&w=256",
      "https://d2liqc29oclqc9.cloudfront.net/images/Email_Verification.png?auto=format&fit=max&w=256",
      "https://d2liqc29oclqc9.cloudfront.net/images/Zone_Files.png?auto=format&fit=max&w=256",
      "https://d2liqc29oclqc9.cloudfront.net/images/Deep-Search.png?auto=format&fit=max&w=256",
    ],
    [
      "Download lists of websites using a specific technology. We track over 3,000 technologies across 280+ million websites.",
      "Technology Reports include email, phone numbers, and website profiling metadata like IP, Hostname, DNS, titles, and other information.",
      "Industry-leading 9-step email verification engine. Never worry about email non-delivery again!",
      "Download lists of active domains across 100s of gTLDs and ccTLDs updated daily.",
      "Custom deploy our technology to search domains for contact information.",
    ],
    [
      "Technology Reports",
      "Rich Data",
      "Email Verification",
      "Zone Files",
      "Deep Search",
    ],
  ];

  const cardStyle = {
    width: 250,
    transition: "transform .5s",
    margin: "1.3rem",
    borderRadius: "1rem",
    "&:hover": {
      boxShadow: "5px 5px 15px",
    },
  };

  const imageDivStyle = {
    borderRadius: "50%",
    boxShadow: "5px 5px 15px",
    width: "45%",
    margin: "10px auto",
  };

  const mediaStyle = {
    height: 100,
    width: 100,
    margin: "auto",
  };

  const contentStyle = {
    position: "relative",
    transition: "opacity .2s",
  };

  const overlayStyle = {
    textAlign: "center",
  };

  return (
    <Grid container>
      {cardDetails[0].map((imageUrl, index) => (
        <Card key={index} sx={cardStyle}>
          <CardContent sx={contentStyle}>
            <Typography gutterBottom variant="h6">
              {cardDetails[2][index]}
            </Typography>
          </CardContent>
          <div style={imageDivStyle}>
            <CardMedia sx={mediaStyle} image={imageUrl} title="Image title" />
          </div>
          <div style={overlayStyle}>
            <Typography
              variant="subtitle2"
              padding="0.5rem"
              marginBottom="1rem"
            >
              {cardDetails[1][index]}
            </Typography>
          </div>
        </Card>
      ))}
    </Grid>
  );
};

export default FeatureCard;

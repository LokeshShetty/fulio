import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { ChartPie, ShieldLock, Mail, ApiApp } from "tabler-icons-react";
import Check from "./Check";

function Features2() {
  const [finalData, setFinalData] = React.useState();
  const feature2Data = [
    {
      img: "https://d2liqc29oclqc9.cloudfront.net/images/kitty%20workings.png?auto=format&fit=max&w=640",
      title: "Data Enrichment",
      content1: "Our data is available for all your general purpose tools",
      content2:
        "Import your website list and our technology stack will do all the heavy lifting, pulling contact information that would take weeks or months to gather with traditional market research methods. Our tools and technologies crawl and scan websites completely autonomously.",
      icon: <ChartPie size={25} strokeWidth={2} color={"#4b43e0"} />,
      highlights: [
        "Website lookup capabilities and technology comparable to the best in the industry.",
        "Generate high quality leads with our technology reports.",
        "Identify technographic segmentation.",
      ],
    },
    {
      img: "https://d2liqc29oclqc9.cloudfront.net/images/kittyironman.png?auto=format&fit=max&w=640",
      title: "Security Reconnaissance",
      content1: "Your security is our top priority.",
      content2:
        "Security professionals worldwide use our web technologies. This solution helps you track security threats on your website. The technology also provides you with detailed information on vulnerabilities and exploitation risks.",
      icon: <ShieldLock size={25} strokeWidth={2} color={"#4b43e0"} />,
      highlights: [
        "Track your own and your competitors' technology trends.",
        "Effectively assess the depth of technology penetration.",
        "Identify bugs and the impact of patches.",
      ],
    },
    {
      img: "https://d2liqc29oclqc9.cloudfront.net/images/kittywithpost.png?auto=format&fit=max&w=640",
      title: "Email Verification",
      content1: "Never worry about non-delivery of your emails",
      content2:
        "Our email extension technology verifies deliverability and checks the server connection to ensure that your email delivery rate remains high, keeping you off the contact blocklist. Our technologies allow us to do all of this without having to send an email to the contact.",
      icon: <Mail size={25} strokeWidth={2} color={"#4b43e0"} />,
      highlights: [
        "Get immediate results and a responsive, intuitive UX with our technology.",
        "Start with 100 free email verifications every month.",
        "Top up email verification credits on the go.",
      ],
    },
    {
      img: "https://d2liqc29oclqc9.cloudfront.net/images/kittyconveyerbelt.png?auto=format&fit=max&w=640",
      title: "APIs",
      content1: "Get unlimited access to our APIs",
      content2:
        "With Ful.io APIs, you have access to any technology stack, contact details, relevant social handles, and much more. Much like BuiltWith, our technology lets you analyze many websites at once, track data on technology usage, and even build your own analytics dataset.",
      icon: <ApiApp size={25} strokeWidth={2} color={"#4b43e0"} />,
      highlights: [
        "Get results right away and update your datasets in real-time.",
        "Our technologies let you easily analyze multiple websites at once.",
        "Take advantage of a free trial before signing up.",
      ],
    },
  ];

  const showData = () => {
    let flag2 = true;
    const fd = feature2Data?.map((d, index) => {
      let data;
      if (flag2) {
        data = (
          <Box margin="5rem 10rem" key={index}>
            <Grid
              container
              gap="5rem"
              justifyContent={"center"}
              boxShadow="1px 1px 5px"
              padding="2rem"
              borderRadius="1rem"
            >
              <Grid xs={12} md={5}>
                <Paper sx={{ boxShadow: "0px 0px 0px" }}>
                  <img src={d.img} alt={d.title} height="auto" width="100%" />
                </Paper>
              </Grid>
              <Grid item xs={12} md={5}>
                <Paper sx={{ boxShadow: "0px 0px 0px" }}>
                  <Typography variant="h5" color="#4b43e0">
                    {d.icon} {d.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      marginTop: "1rem",
                      fontSize: "1.65rem",
                      color: "#4B5563",
                      fontWeight: "600",
                    }}
                  >
                    {d.content1}
                  </Typography>
                  <Typography variant="body1" marginTop="1rem" color="#4B5563">
                    {d.content2}
                  </Typography>
                  <Typography
                    variant="body1"
                    marginTop="1rem"
                    fontWeight="600"
                    color="#4B5563"
                  >
                    Key highlights :
                  </Typography>
                  <Typography variant="body1">
                    {d.highlights.map((e) => {
                      return (
                        <p
                          style={{
                            fontSize: "1rem",
                            color: "#6B7280",
                          }}
                        >
                          <Check />
                          {e}
                        </p>
                      );
                    })}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        );
      } else {
        data = (
          <Box margin="5rem 10rem" key={index}>
            <Grid
              container
              gap="5rem"
              justifyContent={"center"}
              boxShadow="1px 1px 5px"
              padding="2rem"
              borderRadius="1rem"
            >
              <Grid item xs={12} md={5}>
                <Paper sx={{ boxShadow: "0px 0px 0px" }}>
                  <Typography variant="h5" color="#4b43e0">
                    {d.icon} {d.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      marginTop: "1rem",
                      fontSize: "1.65rem",
                      color: "#4B5563",
                      fontWeight: "600",
                    }}
                  >
                    {d.content1}
                  </Typography>
                  <Typography variant="body1" marginTop="1rem" color="#4B5563">
                    {d.content2}
                  </Typography>
                  <Typography
                    variant="body1"
                    marginTop="1rem"
                    fontWeight="600"
                    color="#4B5563"
                  >
                    Key highlights :
                  </Typography>
                  <Typography variant="body1">
                    {d.highlights.map((e) => {
                      return (
                        <p
                          style={{
                            fontSize: "1rem",
                            color: "#6B7280",
                          }}
                        >
                          <Check />
                          {e}
                        </p>
                      );
                    })}
                  </Typography>
                </Paper>
              </Grid>
              <Grid xs={12} md={5}>
                <Paper sx={{ boxShadow: "0px 0px 0px" }}>
                  <img src={d.img} alt={d.title} height="auto" width="100%" />
                </Paper>
              </Grid>
            </Grid>
          </Box>
        );
      }

      flag2 = !flag2;
      return data;
    });

    return fd;
  };

  useEffect(() => {
    const data = showData();
    setFinalData(data);
  }, []);

  return finalData;
}

export default Features2;

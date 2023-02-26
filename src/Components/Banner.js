import { Grid } from "@mui/material";
const images = [
  "https://d2liqc29oclqc9.cloudfront.net/images/coinmarket-2.png?auto=format&fit=max&w=256",
  "https://d2liqc29oclqc9.cloudfront.net/images/New-Market1.png?auto=format&fit=max&w=256",
  "https://d2liqc29oclqc9.cloudfront.net/images/New-Yahoo1.png?auto=format&fit=max&w=256",
  "https://d2liqc29oclqc9.cloudfront.net/images/B2C-Logo-2.png?auto=format&fit=max&w=256",
  "https://d2liqc29oclqc9.cloudfront.net/images/AP-new1.png?auto=format&fit=max&w=200",
  "https://d2liqc29oclqc9.cloudfront.net/images/Readers-02.png?auto=format&fit=max&w=200",
];
const Banner = () => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {images.map((image, index) => (
        <Grid key={index} item xs={10} sm={6} md={4} lg={1.5}>
          <img src={image} alt={{ index }} width="80%" />
        </Grid>
      ))}
    </Grid>
  );
};
export default Banner;

import { Grid, Card, CardContent, Avatar, Typography } from "@mui/material";

const testimonials = [
  {
    id: 1,
    name: "Todd Dunsmore",
    designation: "Doja Marketing/Defi Founder",
    comment:
      '"These web technologies quickly became a game-changer for our business. Lead generation projects that used to take a whole team are completely automatic now. We were able to segment traffic based on location, identify more prospects, and onboard more clients. I can\'t say enough good things about Ful.io."',
    image:
      "https://d2liqc29oclqc9.cloudfront.net/images/todd.webp?auto=format&fit=max&w=64",
  },
  {
    id: 2,
    name: "Nicholas Altimore",
    designation: "Sirlinksalot",
    comment:
      '"Companies need an edge, and Ful.io provided that edge for us. We\'d previously used BuiltWith, but the data and analytics capabilities of Ful.io were a better fit for us"',
    image:
      "https://d2liqc29oclqc9.cloudfront.net/images/nicholas.webp?auto=format&fit=max&w=64",
  },
  {
    id: 3,
    name: "Chris Richards",
    designation: "Utterly Digital",
    comment:
      '"We used to manually upload contact details and other data, but it took way too long. We needed a solution that could automate the process and free up resources. Ful.io just works for us. Their technology is incredible."',
    image:
      "https://d2liqc29oclqc9.cloudfront.net/images/chris.png?auto=format&fit=max&w=64",
  },
  {
    id: 4,
    name: "Robert Kaene",
    designation: "The Wednesday Club",
    comment:
      '"Ful.io\'s apps and tools have completely changed the way we look at traffic and identify prospects. Before, our R&D team tried BuiltWith, then worked to develop our own technology. But with Ful.io, we can save both time and money."',
    image:
      "https://d2liqc29oclqc9.cloudfront.net/images/robert.webp?auto=format&fit=max&w=64",
  },
  {
    id: 5,
    name: "Mad Singers",
    designation: "SEO Mastery Summit",
    comment:
      "\"We're always looking for new ways to boost our advertising efforts and analyze websites to improve our processes. Ful.io has been a perfect partner throughout. We've been able to discover more valuable data on prospects than we ever did on our own.\"",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 6,
    name: "John Doe",
    designation: "CEO, Company",
    comment:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo metus ac eros fermentum, quis commodo est aliquet."',
    image:
      "https://d2liqc29oclqc9.cloudfront.net/images/yana.jpg?auto=format&fit=max&w=64",
  },
];

const Testimonials = () => {
  return (
    <div
      style={{
        width: "80%",
        marginTop: "4rem",
        borderRadius: "1rem",
        boxShadow: "1px 1px 5px",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="600"
        gutterBottom
        textAlign="center"
        margin="2rem"
      >
        Testimonials
      </Typography>
      <Grid container spacing={6} padding="2.5rem" alignItems="center">
        {testimonials.map((testimonial) => (
          <Grid key={testimonial.id} item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "27rem",
                width: "20rem",
                "&:hover": { boxShadow: "5px 5px 15px" },
              }}
            >
              <CardContent height="100px">
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  sx={{ width: 70, height: 70, marginBottom: 2 }}
                />
                <Typography variant="h6" component="h2">
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  marginBottom="1rem"
                >
                  {testimonial.designation}
                </Typography>
                <Typography variant="body1" component="p">
                  {testimonial.comment}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Testimonials;

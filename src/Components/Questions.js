import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const FAQ = [
  {
    id: 1,
    question: "How much will this cost?",
    answer:
      "We offer free and paid plans. Our paid plans start at $49/month or $499/year.We also offer enterprise plans for others building on our technology.",
  },
  {
    id: 2,
    question: "What information do we provide?",
    answer:
      "Our technology reports come with metadata, including phone numbers, emails, IPs, DNS information, hostname, titles, and much more!",
  },
  {
    id: 3,
    question: "How do you collect your information?",
    answer:
      "Our server cluster crawls thousands of sources daily to find active domains. We then segment active domains using our repository of 3000+ technology footprints. We also deploy our crawlers to enrich this segmented technographic data with additional metadata. All our lists are updated daily.",
  },
  {
    id: 4,
    question: "Can I upload domain lists?",
    answer:
      'Yes! All accounts come preloaded with credits to get segmentation and other data for your custom domain lists. We also baked in a "Deep Search" engine to obtain hard-to-find contact information from domains.',
  },
];

const Questions = () => {
  const [expanded, setExpanded] = useState(null);

  const handleMouseEnter = (index) => {
    setExpanded(index);
  };

  const handleMouseLeave = () => {
    setExpanded(null);
  };
  return (
    <div
      style={{
        width: "80%",
        marginTop: "5rem",
        borderRadius: "1rem",
        boxShadow: "1px 1px 5px",
        padding: "2rem",
        marginBottom: "2rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} alignSelf="center">
          <Typography variant="h4" gutterBottom marginBottom="2rem">
            Frequently Asked Questions
          </Typography>
          {FAQ.map((faq, index) => (
            <Accordion
              key={faq.id}
              expanded={expanded === index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://d2liqc29oclqc9.cloudfront.net/images/kitty-faq.png?auto=format&fit=max&w=640"
            alt="Kitty FAQ"
            style={{ maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Questions;

import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Features from "./Components/Features";
import Features2 from "./Components/Features2";
import Banner from "./Components/Banner";
import Testimonials from "./Components/Testimonials";
import Questions from "./Components/Questions";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="banner">
        <p>
          🎉 97563 new domains added on 24 February 2023{" "}
          <span>
            <a className="readMore" href="/">
              Read More
            </a>
          </span>
        </p>
      </div>
      <div className="intro">
        <h1 className="introTitle">What Is The Web Built On?</h1>
        <p>Uncover the technology stack behind any website.</p>
        <p>
          Use our tools for lead generation, market analysis and competitor
          research.
        </p>
        <Paper
          component="form"
          sx={{
            mt: "3rem",
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 700,
            boxShadow: "1px 1px 5px",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Enter URL for lookup"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            type="button"
            sx={{ p: "10px", color: "#4b43e0" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <p style={{ marginTop: "7rem" }}>
          We periodically scan{" "}
          <span
            style={{
              color: "rgb(230,230,230)",
              backgroundColor: "rgba(26, 9, 185, 0.40)",
              borderRadius: "5px",
              padding: "5px 10px",
            }}
          >
            210,924,846
          </span>{" "}
          websites and provide up-to-date information
        </p>
      </div>
      <Features />
      <Features2 />
      <Banner />
      <Testimonials />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;

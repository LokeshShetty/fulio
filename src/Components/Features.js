import { Button } from "@mui/material";
import React from "react";
import Card from "./Card";
import "./Features.css";

export default function Features() {
  return (
    <div className="featuresContainer">
      <h1>Power Your Sales And Marketing Teams</h1>
      <Card />
      <Button
        sx={{
          color: "white",
          backgroundImage:
            "linear-gradient(to right, #036ffc 0%,#4b43e0 50%, #4b43e0 100%)",
          padding: "0.5rem 2rem",
          margin: "3rem 3rem 5rem 3rem ",
          "&:hover": {
            backgroundImage:
              "linear-gradient(to left, #036ffc 0%,#4b43e0 50%, #4b43e0 100%)",
          },
        }}
      >
        Try for free
      </Button>
      <Button
        variant="outlined"
        sx={{
          color: "#4b43e0",
          padding: "0.5rem 2rem",
          marginBottom: "2rem",
          "&:hover": {
            backgroundColor: "#4b43e0",
            color: "white",
          },
        }}
      >
        How we are better
      </Button>
    </div>
  );
}

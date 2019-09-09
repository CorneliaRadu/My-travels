// src/Travel.js
import React from "react";

const Travel = props => (
  <figure>
  <img src={props.image} />
  <figcaption>
    <h1>{props.destination}</h1>
    <h2>{props.distance}</h2>
    <h2>{props.country}</h2>
  </figcaption>
</figure>
);

export default Travel;
import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/*To check if props.bio is truthy*/}
        {props.bio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedIn={props.links.linkedin} />
    </div>
  );
}

export default About;

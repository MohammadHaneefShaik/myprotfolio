import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Open for Internships & Freelance Projects",
          "Full-Stack Developer",
          "Backend Specialist | Node JS ",
          "Passionate About Startups",
          "Turning Ideas into Code",
          "Problem Solver",

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

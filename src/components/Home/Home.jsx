import React from "react";
import Ztext from "react-ztext";
import "./home.css";
export default function Home() {
  return (
    <div className="Home">
      <Ztext
        depth="1rem"
        direction="both"
        event="pointer"
        eventRotation="30deg"
        eventDirection="default"
        fade={false}
        layers={10}
        perspective="500px"
        style={{
          fontSize: "4rem",
        }}
      >
        <span role="img" aria-label="emoji">
          Jose Luis Sequeira
        </span>
      </Ztext>
    </div>
  );
}

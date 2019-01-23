import React from "react";

const NavBar = props => (
  <div>
    Score: {props.score}
    <br />
    Game Over: {props.gameOver ? "Dead" : "Alive"}
  </div>
);

export default NavBar;

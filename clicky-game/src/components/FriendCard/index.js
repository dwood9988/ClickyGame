import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
        </ul>
      </div>
      <span onClick={() => props.handleSelected(props.id)} className="selected">
        𝘅
      </span>
    </div>
  );
}

export default FriendCard;
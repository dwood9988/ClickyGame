import React, { Component } from "react";
import "./style.css";

class FriendCard extends Component {
  handleClick = id => {
    this.props.handleSelection(id);
  };

  render() {
    const { id, name, image, occupation } = this.props;

    return (
      <div className="card" onClick={() => this.handleClick(id)}>
        <div className="img-container">
          <img alt={name} src={image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {name}
            </li>
            <li>
              <strong>Occupation:</strong> {occupation}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FriendCard;

import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    selected: false
  };

  handleSelected = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const selected = this.state.friends.filter(friend => friend.id !== id);

    //set the state to clicked then shuffle the deck to give each card a new location.
    //something goes here to do that.
    //.shuffle method? something like that?

    // shuffle = array => {
    //   for (let i = array.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [array[i], array[j]] = [array[j], array[i]];
    //   }
    // };

    this.setState({ selected });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>The Office Memory Game</Title>
        {this.state.selected.map(friend => (
          <FriendCard
            handleSelected={this.handleSelected}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

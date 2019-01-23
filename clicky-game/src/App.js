import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    characters: friends,
    selected: [],
    score: 0,
    gameOver: false
  };

  componentDidMount() {
    this.setState({ characters: this.shuffleCharacters() });
  }

  shuffleCharacters = () => {
    const characters = this.state.characters;
    for (const index of characters.keys()) {
      const randIndex = Math.floor(Math.random() * characters.length);
      const temp = characters[index];
      characters[index] = characters[randIndex];
      characters[randIndex] = temp;
    }
    return characters;
  };

  handleSelection = id => {
    if (!this.state.gameOver) {
      this.updateScore(id);
    }
  };

  updateScore = id => {
    const selected = this.state.selected;

    if (selected.includes(id)) {
      this.setState({ gameOver: true });
    } else {
      this.shuffleCharacters();
      this.setState(prevState => ({
        score: prevState.score + 1,
        selected: [...prevState.selected, id]
      }));
    }
  };

  render() {
    return (
      <Wrapper>
        <NavBar
          selected={this.state.selected}
          score={this.state.score}
          gameOver={this.state.gameOver}
        />
        <Title>The Office Memory Game</Title>
        {this.state.characters.map(friend => (
          <FriendCard
            handleSelection={this.handleSelection}
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

import React, {Component} from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import SpaceContainer from "./components/SpaceContainer";
import ImageContainer from "./components/ImageContainer";
import Footer from "./components/Footer";
import elements from "./elements.json";

class App extends Component {
  state = {
    elements,
    clickedImages: [],
    score: 0,
    topScore: 0,
    message: "Click on an image to begin.",
  };

  // STATES
  // if not in array:
  // clicked = false
  // push to array, add +1 to score
  // if score <= topscore, score = topscore
  // if score === 12, you win

  // if in array:
  // clicked = true;
  // you lose

  scoreCounter = name => {
    let clickedIds = this.state.clickedImages; // clickedImages: []
    let currentScore = this.state.score;
    let topScore = this.state.topScore;

    // If element has not been clicked before
    if (!clickedIds.includes(name)) {
      clickedIds.push(name);
      currentScore++;
      this.setState({
        score: currentScore,
        message: "Correct guess, keep going!"
      });
      if (currentScore <= topScore) {
        this.setState({topScore: currentScore});
        console.log(topScore);
      } else if (currentScore === 12) {
        this.setState({
          clickedImages: [],
          score: 0,
          topScore: 0,
          message: "You win!",
        });
      };
      // If element has been clicked before
    } else {
      this.setState({
        clickedImages: [],
        score: 0,
        topScore: 0,
        message: "Sorry, you lose. Click an image to try again."
      });
    };

    // Shuffle elements after click
    this.setState({
      elements: this.state.elements.sort(() => {
        return 0.5 - Math.random()
      })
    });
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Jumbotron />
        <SpaceContainer>
          {this.state.elements.map(element => (
            <ImageContainer
              scoreCounter={this.scoreCounter}
              name={element.name}
              image={element.image}
            />
          ))}
        </SpaceContainer>
        <Footer />
      </Wrapper>
    );
  };
}

export default App;
import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import SpaceContainer from "./components/SpaceContainer";
import Footer from "./components/Footer";
import images from "./images.json";

class App extends Component {
  state = {
    images
  };

  render() {
    return (
      <Wrapper>
        <Navbar>Navbar</Navbar>
        <Jumbotron>Jumbotron</Jumbotron>
        {this.state.images.map(image => (
          <SpaceContainer
            name={image.name}
            image={image.image}
          />
        ))}
        <Footer>Footer</Footer>
      </Wrapper>
    );
  };
}

export default App;
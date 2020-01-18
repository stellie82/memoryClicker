import React, {Component} from "react";
import Container from "./Container";
import SpaceContainer from "../../../src/components/SpaceContainer";

class SpaceContainer extends Component {
    state = {
        result: {},
        search: ""
    };

    render() {
        return (
            <Container>
                <p>Hello World</p>
            </Container>
        );
    }
}

export default SpaceContainer;
import React from "react";
import Card from "react-bootstrap/Card";
import "./HB.css";
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickCounter: 0,
    };
  }
  handleClick = () => {
    this.setState({
      clickCounter: this.state.clickCounter + 1,
    });
  };
  render() {
    return (
      <Card style={{ width: "60%" }} >
        <Card.Img
          variant="top"
          src={this.props.imageUrl}
          alt={this.props.title}
          title={this.props.title}
          onClick={this.handleClick}
         
        />
        <Card.Body>
          <Card.Text>
            <strong>❤</strong>
            <strong id="dis">{this.state.clickCounter}</strong>
          </Card.Text>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default HornedBeast;

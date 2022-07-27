import React from "react";
import Card from "react-bootstrap/Card";
import "./HB.css";
import 'animate.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickCounter: 0,
    };
  }
  counterHandleClick =()=>{
    this.setState({ clickCounter: this.state.clickCounter + 1 });
  }
  handleClick = () => {
    
    this.props.displayModal(this.props.data);
  };
  render() {
    return (
      <>
      <Card>
        <Card.Img
          variant="top"
          src={this.props.imageUrl}
          alt={this.props.title}
          title={this.props.title}
          onClick={this.handleClick}
          
          
        />
        <Card.Body>
          <Card.Text>
            <strong onClick={this.counterHandleClick} className="click" 
           
            title="Love🥰">❤</strong>
            <strong id="dis" >{this.state.clickCounter}</strong>
          </Card.Text>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
      
    </>
      );
  }
}
export default HornedBeast;

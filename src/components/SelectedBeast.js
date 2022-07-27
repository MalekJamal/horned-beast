import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      closeShow: false,
      show: false,
    };
  }
  handleClose = () => {
    this.setState({
      show: this.state.closeShow,
    });
  };
  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
          <img src={this.props.selectedBeast.image_url} width={"100%"} 
          alt={this.props.selectedBeast.title}/><br></br>
          {this.props.selectedBeast.description}
          
          </Modal.Body>
          <Modal.Footer>   
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;

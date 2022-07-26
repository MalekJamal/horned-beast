import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Data from '../json/data.json';

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
    
        <Button variant="primary" onClick={() => this.handleShow()}>
            Open
        </Button>

        <Modal show={this.state.show} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body><img src={this.props.imageUrl} width={200}/>
          <Modal.Body>{this.props.description}</Modal.Body>
          </Modal.Body>
          <Modal.Footer>
          
            <Button variant="secondary" onClick={() => this.handleClose()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;

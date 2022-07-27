import React from "react";
import Form from "react-bootstrap/Form";
import './FormFilter.css'
class FormFilter extends React.Component {
  render() {
    return (
      <>
       
        <Form.Group className="mb-5 center">
          <Form.Label>Select Numbers Of Hornes</Form.Label>
          <Form.Select className="select">
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </Form.Select>
        </Form.Group>
        
      </>
    );
  }
}

export default FormFilter;

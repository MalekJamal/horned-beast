import React from "react";
import HornedBeast from "./HornedBeast";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import './FormFilter.css'
class Main extends React.Component {
  filterData=(e)=>{
   this.props.filterBeastByHorenNumber(e)
  }
  render() {
    return (
      <>    
      
       <Form.Group className="mb-5 select" >
          <Form.Label htmlFor="horendSelected">Select Numbers Of Hornes</Form.Label>
          <Form.Select className="select" id="horendSelected" onChange={this.filterData}>
            <option value=''>All Beast</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
            <option value='100'>100😲</option>  
          </Form.Select>
          
        </Form.Group>  
        

          <Row xs={1} md={4} className="g-4">
          {
          this.props.allBeast.map((item, id) => {
            

              return (
                <Col key={id}>
                  <HornedBeast
                    title={item.title}
                    imageUrl={item.image_url}
                    description={item.description}
                    key={id}
                    displayModal={this.props.displayModal}
                    data={item}
                  />
                </Col>
              );
           
           
          })}
        </Row>         
      </>
    );
  }
}
export default Main;

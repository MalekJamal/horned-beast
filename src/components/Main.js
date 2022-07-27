import React from "react";
import HornedBeast from "./HornedBeast";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
class Main extends React.Component {
  render() {
    return (
      <>       
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

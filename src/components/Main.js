import React from "react";
import HornedBeast from "./HornedBeast";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Data from "../json/data";
class Main extends React.Component {
  render() {
    return (
      <Row xs={1} md={3} className="g-4">
        {Data.map((item, id) => {
          return (
            <Col Key={id}>
              <HornedBeast
                title={item.title}
                imageUrl={item.image_url}
                description={item.description}
                Key={id}
              />
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Main;

import React from "react";
import HornedBeast from "./HornedBeast";
import SelectedBeast from "./SelectedBeast";

class Main extends React.Component {

  malek=(a)=>{

  }
  render() {
    return (
      <>
              <HornedBeast
                title={this.props.title}
                imageUrl={this.props.imageUrl}
                description={this.props.description}
                Key={this.props._id}
              />

              <SelectedBeast
              title={this.props.title}
              imageUrl={this.props.imageUrl}
              description={this.props.description}
              Key={this.props._id}
              method={this.malek}
              />
              
          </>
    );
  }
}

export default Main;

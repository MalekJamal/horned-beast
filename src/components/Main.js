import React from "react";
import HornedBeast from "./HornedBeast";
import Data from "../json/data";
class Main extends React.Component {
  render() {
    return (
      <div>
        {Data.map((item, _id) => {
          return (
            <HornedBeast
              title={item.title}
              imageUrl={item.image_url}
              description={item.description}
              key={_id}
            />
          );
        })}
      </div>
    );
  }
}

export default Main;

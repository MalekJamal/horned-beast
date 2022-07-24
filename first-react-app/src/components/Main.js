import React from "react";
import HornedBeast from "./HornedBeast";
class Main extends React.Component {
  render() {
    const arr = [
      {
        _id: 1,
        image_url:
          "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
        title: "UniWhal",
        description: "A unicorn and a narwhal nuzzling their horns",
        keyword: "narwhal",
        horns: 1,
      },

      {
        _id: 2,
        image_url:
          "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
        title: "Rhino Family",
        description: "Parent rhino with two babies",
        keyword: "rhino",
        horns: 2,
      },

      {
        _id: 3,
        image_url:
          "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
        title: "Unicorn Head",
        description: "Someone wearing a very silly unicorn head mask",
        keyword: "unicorn",
        horns: 1,
      },
    ];

    return (
      <div>
        <HornedBeast
          title={arr[0].title}
          imageUrl={arr[0].image_url}
          description={arr[0].description}
        />

        <HornedBeast
          title={arr[1].title}
          imageUrl={arr[1].image_url}
          description={arr[1].description}
        />

        <HornedBeast
          title={arr[2].title}
          imageUrl={arr[2].image_url}
          description={arr[2].description}
        />
      </div>
    );
  }
}

export default Main;

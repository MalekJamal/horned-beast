import React from "react";
import './HB.css';
class HornedBeast extends React.Component {
  render() {
    return (
    <div className="cont">
       <h2>{this.props.title}</h2>
       <div className="card"> 
       <img src={this.props.imageUrl} alt={this.props.title} 
       title={this.props.title} width="200px"/>
       <div>
       <p>{this.props.description}</p> 
       </div>
       </div>
    </div>
    );
  }
}
export default HornedBeast;
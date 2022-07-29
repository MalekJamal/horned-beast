import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import './FormFilter.css'
class FormFilter extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showBeasts:0
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({
            showBeasts: e.target.horendSelected.value
        })
        
        console.log(e.target.horendSelected.value)
    }
  render() {
    return (
      <>
       
       
        
        
      </>
    );
  }
}

export default FormFilter;

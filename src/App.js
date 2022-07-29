import './App.css';
import Header from '../src/components/Header.js';
import Main from '../src/components/Main.js';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from '../src/json/data.json';
import SelectedBeast from '../src/components/SelectedBeast';
import React from 'react';
import FormFilter from './components/FormFilter';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      allBeast: Data,
      selectedBeast:{//should be updated once we selected the beast or click
      },
      showModal:false
    }
  }

  displayModal =(beast)=>{
    let result=this.state.allBeast.find(item => item.title === beast.title)
    this.setState({
      showModal:true,
      selectedBeast: result,/// beast Or result same output
    })

  }
  handleClose =()=>{
    this.setState({
      showModal:false
    })
  }
  
  filterBeastByHorenNumber=(e)=>{
    const hornNumber= parseInt(e.target.value);
    let filterdData= Data;

    if(hornNumber){
      filterdData = Data.filter(item=>item.horns ===  hornNumber)
    }
    this.setState({
      allBeast:filterdData
    })
  }

  render(){
    return (
      <div className="App">
        <Header/>
      <FormFilter allBeast={this.state.allBeast}/>
       <Main allBeast={this.state.allBeast} displayModal={this.displayModal} 
       filterBeastByHorenNumber={this.filterBeastByHorenNumber} />

       <SelectedBeast show={this.state.showModal} handleClose={this.handleClose} 
       selectedBeast={this.state.selectedBeast} />

        <Footer/>
      </div>
    );
  }
}


export default App;

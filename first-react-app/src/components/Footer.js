import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  
} from 'mdb-react-ui-kit';

class Footer extends React.Component{
  render(){

    return (
      <MDBFooter className='bg-dark text-center text-white'>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
         Malek Hamdan © 2022 Copyright:  
          <a className='text-white' href='#'>
             Horned Beast
          </a>
        </div>
      </MDBFooter>
    );

  }
}

export default Footer;
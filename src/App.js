import './App.css';
import Header from '../src/components/Header.js';
import Main from '../src/components/Main.js';
import Footer from './components/Footer';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from '../src/json/data.json';
import SelectedBeast from '../src/components/SelectedBeast';

function App() {
  return (
    <div className="App">
      <Header/>

      {
        <Row xs={1} md={3} className="g-4">
        {Data.map((item, id) => {
          return (
            <Col Key={id}>
              <Main
                title={item.title}
                imageUrl={item.image_url}
                description={item.description}
                Key={id}
              />
            </Col>
          );
        })}
      </Row>
      }

      <Footer/>
    </div>
  );
}

export default App;

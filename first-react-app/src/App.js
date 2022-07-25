import './App.css';
import Header from '../src/components/Header.js';
import Main from '../src/components/Main.js';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

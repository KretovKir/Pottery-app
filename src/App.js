import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import About from './Components/About';
import TwoVases from './Components/TwoVases';
import Collection from './Components/Collection';
import ShopStart from './Components/ShopStart';
import FormBlock from './Components/FormBlock';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Main/>
     <About/>
     <TwoVases/>
     <Collection/>
     <ShopStart/>
     <FormBlock/>
     <Footer/>
    </div>
  );
}

export default App;

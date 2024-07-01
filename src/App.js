import Header from "./components/Header_Route";
import Main from "./components/Main";
import Specials from "./components/Specials";
import Testimonals from "./components/Testimonals";
import Backstory from "./components/Backstory";
import Footer from "./components/Footer";
import './App.css';


function App() {
  return (
    <>
      <div className="row">
        <div className="column sm-2"></div>
        <div className="column sm-8"><Header /></div>
        <div className="column sm-2"></div>
      </div>
      <div className="row">
        <div className="column sm-2"></div>
        <div className="column sm-8"><Main /></div>
        <div className="column sm-2"></div>
      </div>
      <div className="row">
        <div className="column sm-2"></div>
        <div className="column sm-8"><Specials /></div>
        <div className="column sm-2"></div>
      </div>
      <div className="row">
        <div className="column sm-2"></div>
        <div className="column sm-8"><Testimonals /></div>
        <div className="column sm-2"></div>
      </div>
      <div className="row">
        <div className="column sm-2"></div>
        <div className="column sm-8"><Backstory /></div>
        <div className="column sm-2"></div>
      </div>
      <div className="row">
        <div className="column sm-2"></div>
        <div className="column sm-8"><Footer /></div>
        <div className="column sm-2"></div>
      </div>
    </>
  );
};

export default App;

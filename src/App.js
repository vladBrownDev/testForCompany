import './App.css';
// components
import Header from './components/header/Header';
import UpperMain from './components/upperMain/UpperMain';
import Team from "./components/team/Team"
import Form from './components/form/Form';
import Description from './components/description/Description';
import Carousel from './components/carousel/Carousel';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <div id="upperPart">
        <Header/>
        <UpperMain/>
      </div>
      <Team/>
      <Form/>
      <Description/>
      <Carousel/>
      <Footer/>
    </>
  );
}

export default App;

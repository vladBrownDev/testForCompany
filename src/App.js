import './App.css';
// components
import Header from './components/header/Header';
import UpperMain from './components/upperMain/UpperMain';
import Team from "./components/team/Team"
import Form from './components/form/Form';

function App() {
  return (
    <>
      <div id="upperPart">
        <Header/>
        <UpperMain/>
      </div>
      <Team/>
      <Form/>
    </>
  );
}

export default App;

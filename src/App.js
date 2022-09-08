import './App.css';
// components
import Header from './components/header/Header';
import UpperMain from './components/upperMain/UpperMain';
import Team from "./components/team/Team"

function App() {
  return (
    <>
      <div id="upperPart">
        <Header/>
        <UpperMain/>
      </div>
      <Team/>
    </>
  );
}

export default App;

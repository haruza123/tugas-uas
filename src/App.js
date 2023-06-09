import "./App.css";
import Navbar from "./Components/Navbar";
import { MainContainer } from "./Components/MainContainer";
import { RightMenu } from "./Components/RightMenu";
import "./styles/Responsive.css";

function App() {
  return (
    <div className="App">
      <MainContainer />
      <RightMenu />

      <div className="background"></div>
    </div>
  );
}

export default App;

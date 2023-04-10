import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Nav from "./components/Nav";
import RouterRoots from "./router/RoutesRoot";

function App() {
  // #282828
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <RouterRoots />
          <Nav />
          <Aside />
          <Main />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

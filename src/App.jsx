import './App.css';
import Aside from "./components/Aside";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  // #282828

  return (
    <>
      <div className="container">
        <Nav />
        <Aside />
        <Main />
      </div>
    </>
  );
}

export default App;

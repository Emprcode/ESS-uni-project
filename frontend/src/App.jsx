import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";

function App() {
  return (
    <Router>
      <div className="App">
        <Main />
      </div>
    </Router>
  );
}

export default App;

import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import AppRoutes from "./AppRoutes";
import Header from "./commponents/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.scss";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Route, Routes } from "react-router-dom";

// IMPORTS
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}

export default App;

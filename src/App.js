import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from "./views/Home_view"
import Products from "./views/Products_view"


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </Router>

  );
}

export default App;

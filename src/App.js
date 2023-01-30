import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext, useAuth } from "./context/userContext";
import Home from "./views/Home_view";
import Products from "./views/Products_view";
import Login from "./views/Login_view";
import Register from "./views/Register_view";
import ProductDetail from "./views/Product_detail_view";
import Statistics from "./views/Statistics_view";
import News from "./views/News_view";

function App() {

  return (
    <AuthContext.Provider value={useAuth()}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/News" element={<News />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Products/:id" element={<ProductDetail />} />
          <Route path="/Statistics" element={<Statistics />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

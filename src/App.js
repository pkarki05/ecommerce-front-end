import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path={"/"} element={<HomePage />} />
          {/* <Route path="/shoppingcart" element={<ShoppingCart />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

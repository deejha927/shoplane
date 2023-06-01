import { Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Favourites from "./Pages/Favourites";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourites" element={<Favourites />} />"
      </Routes>
    </div>
  );
}

export default App;

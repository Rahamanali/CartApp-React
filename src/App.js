import ProductScreen from "./containers/products/ProductScreen";
import CartScreen from "./containers/cart/CartScreen";
import NavBar from "./containers/navbar/NavBar";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route />
        <Route exact path="/products">
          <ProductScreen />
        </Route>
        <Route exact path="/cart">
          <CartScreen />
        </Route>
      </Router>
    </div>
  );
}

export default App;

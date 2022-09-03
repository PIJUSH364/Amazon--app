import "./App.css";
import Header from "./components/homePage/Header";
import Home from "./components/homePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/userPage/Login";
import CreateUser from "./components/userPage/CreateUser";
import Checkout from "./components/checkOut/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/createuser" element={<CreateUser />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

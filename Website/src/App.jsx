import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Nopage from "./Pages/NoPage";
import Login from "./Pages/Login";
import GridPage from "./Pages/GridPage";
import Slider from "./Components/Slider";
import Test from "./Components/Test";
import SignUp from "./Pages/SignUp";
import SingleProduct from "./Pages/SingleProduct";
import Trial from "./Pages/Trial";

// jdj

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="grid" element={<GridPage />} />
          <Route path="slider" element={<Slider />} />
          <Route path="SingleProduct/:id" element={<SingleProduct />} />
          <Route path="Trial/:id" element={<Trial />} />
          <Route path="*" element={<Nopage />} />
          <Route path="test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

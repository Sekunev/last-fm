import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Details from "../pages/Details";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Absulute */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} /> */}
        {/* Relative */}
        <Route index path="/" element={<Home />} />
        <Route path="details/:name" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

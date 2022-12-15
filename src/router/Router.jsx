import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
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
        <Route path="details" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

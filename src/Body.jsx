import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Body = () => {
  return (
    <div>
      <Navbar />
      {/* Outlet is for Children routes that will be rendered in outlet */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;

import Navbar from "@/component/layout/Navbar";
import Footer from "@/component/layout/Footer";
import Service from "@/component/Service";
import { FeaturedProducts } from "@/component/FeaturedProduct";
import { Outlet } from "react-router-dom";
import { DealZone } from "../DialZone";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Service />
      <FeaturedProducts />
      <DealZone />
      <Footer />
    </div>
  );
};

export default HomeLayout;

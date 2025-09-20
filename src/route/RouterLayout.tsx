

import Navbar from "@/component/layout/Navbar";
import Footer from "@/component/layout/Footer";
import { Outlet } from "react-router-dom";

const RouterLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RouterLayout;

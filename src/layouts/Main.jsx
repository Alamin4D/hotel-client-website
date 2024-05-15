import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Toaster } from 'react-hot-toast';
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";


const Main = () => {
  return (
    <div>
      <Helmet>
        <title>Rooms</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Navbar />
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Main;
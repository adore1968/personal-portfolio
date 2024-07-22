import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppProvider from "./context/AppProvider";

function Root() {
  return (
    <AppProvider>
      <Navbar />
      <main className="container min-h-screen p-6 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </AppProvider>
  );
}

export default Root;

import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./components";


const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default App;
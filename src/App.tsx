import { Outlet } from "react-router-dom";
import Navbar from "./componetns/Navbar";
import Sidebar from "./componetns/Sidebar";

const App = () => {
  return (
    <div className="flex gap-6">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="mb-10 px-4 lg:pl-6 lg:pr-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;

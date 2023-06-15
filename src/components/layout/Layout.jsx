import { Outlet } from "react-router-dom";
import Navbar from "../layout/navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/*aca va a ir el route de footer*/}
    </div>
  );
};

export default Layout;

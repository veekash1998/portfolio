import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainRoute = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainRoute;

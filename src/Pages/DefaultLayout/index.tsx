import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";

function DefaultLayout() {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  )
}

export default DefaultLayout;

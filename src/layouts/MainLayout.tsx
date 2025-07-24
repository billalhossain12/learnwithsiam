import { Outlet } from "react-router-dom";
import Header from "../shared/Header";

export default function MainLayout() {
  return (
    <main>
      <Header />
      <div className="md:mx-10 mx-5 md:mt-24 mt-20 mb-10">
        <Outlet />
      </div>
    </main>
  );
}

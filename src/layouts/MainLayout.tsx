import { Outlet } from "react-router-dom";
import Header from "../shared/Header";

export default function MainLayout() {
  return (
    <main>
      <Header />
      <div className="mx-10 mt-20 mb-10">
        <Outlet />
      </div>
    </main>
  );
}

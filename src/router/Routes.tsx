import { createBrowserRouter } from "react-router-dom";
import SpecialPhrases from "../pages/HSC/SpecialPhrases";
import HSCContent from "../pages/HSC/HSCContent";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "hsc-content",
        element: <HSCContent />,
      },
    ],
  },
  {
    path: "special-phrases",
    element: <SpecialPhrases />,
  },
]);

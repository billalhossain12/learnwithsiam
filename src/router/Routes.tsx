import { createBrowserRouter } from "react-router-dom";
import SpecialPhrases from "../pages/HSC/SpecialPhrases";
import HSCContent from "../pages/HSC/HSCContent";
import MainLayout from "../layouts/MainLayout";
import Prepositions from "../pages/HSC/Prepositions";
import CompletingSentences from "../pages/HSC/CompletingSentences";
import Modifiers from "../pages/HSC/Modifiers";
import RightFormOfVerbs from "../pages/HSC/RightFormOfVerbs";
import Connectors from "../pages/HSC/Connectors";

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
  {
    path: "prepositions",
    element: <Prepositions />,
  },
  {
    path: "completing-sentences",
    element: <CompletingSentences />,
  },
  {
    path: "modifiers",
    element: <Modifiers />,
  },
  {
    path: "right-form-of-verbs",
    element: <RightFormOfVerbs />,
  },
  {
    path: "connectors",
    element: <Connectors />,
  },
]);

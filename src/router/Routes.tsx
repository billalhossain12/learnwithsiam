import { createBrowserRouter } from "react-router-dom";
import SpecialPhrases from "../pages/HSC/SpecialPhrases";
import HSCContent from "../pages/HSC/HSCContent";
import MainLayout from "../layouts/MainLayout";
import Prepositions from "../pages/HSC/Prepositions";
import CompletingSentences from "../pages/HSC/CompletingSentences";
import Modifiers from "../pages/HSC/Modifiers";
import RightFormOfVerbs from "../pages/HSC/RightFormOfVerbs";
import Connectors from "../pages/HSC/Connectors";
import Punctuations from "../pages/HSC/Punctuations";
import PronounReferences from "../pages/HSC/PronounReferences";
import Narrations from "../pages/HSC/Narrations";
import SSCRightFormsOfVerbs from "../pages/SSC/SSCRightFormsOfVerbs";
import TagQuestions from "../pages/SSC/TagQuestions";
import SSCContent from "../pages/SSC/SSCContent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "hsc-content",
        element: <HSCContent />,
      },
      {
        path: "ssc-content",
        element: <SSCContent />,
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
  {
    path: "punctuations",
    element: <Punctuations />,
  },
  {
    path: "pronoun-references",
    element: <PronounReferences />,
  },
  {
    path: "narrations",
    element: <Narrations />,
  },
  {
    path: "ssc-right-forms-of-verbs",
    element: <SSCRightFormsOfVerbs />,
  },
  {
    path: "ssc-tag-questions",
    element: <TagQuestions />,
  },
]);

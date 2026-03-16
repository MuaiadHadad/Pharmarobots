import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AreasPage from "./pages/AreasPage";
import ProjetoPage from "./pages/ProjetoPage";
import SobrePage from "./pages/SobrePage";
import ParceirosPage from "./pages/ParceirosPage";
import ContactoPage from "./pages/ContactoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "areas", element: <AreasPage /> },
      { path: "projeto", element: <ProjetoPage /> },
      { path: "sobre", element: <SobrePage /> },
      { path: "parceiros", element: <ParceirosPage /> },
      { path: "contacto", element: <ContactoPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

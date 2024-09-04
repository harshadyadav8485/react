import { AppLayout } from "./Component/AppLayout";
import { District } from "./Component/District";
import { States } from "./Component/States";
import { ContactPage } from "./ContactPage";
import { Home } from "./Home";
import React from "react";
import "./App.css";
const {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} = require("react-router-dom");

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/Home",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/States",
          element: <States />,
        },
        {
          path: "/District",
          element: <District />,
        },
      ],
    },
  ]);

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/contact" element={<ContactPage />} />
  //     </Route>
  //   )
  // );
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;

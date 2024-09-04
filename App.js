import { AppLayout } from "./Component/AppLayout";
import { ContactPage } from "./ContactPage";
import { Home } from "./Home";
import React from "react";

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

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import IndexPage from "./pages/IndexPage";
import DetailsPage from "./pages/DetailsPage";
import SettingsPage from "./pages/SettingsPage";
import FavouritesProvider from "./store/FavouritesProvider";
import SettingsProvider from "./store/SettingsProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "details",
        element: <DetailsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <SettingsProvider>
      <FavouritesProvider>
        <RouterProvider router={router} />
      </FavouritesProvider>
    </SettingsProvider>
  );
};

export default App;

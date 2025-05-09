import { createBrowserRouter, type LoaderFunction } from "react-router";
import App from "../../App";

const homeLoader: LoaderFunction = async () => {
  return { message: "Welcome to Tech Bridge" };
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    loader: homeLoader,
    children: [
      {
        path: "notifications",
        element: <div>Notifications Page</div>,
        loader: async () => {
          return { notifications: [] };
        },
      },
      {
        path: "faq",
        element: <div>FAQ Page</div>,
        loader: async () => {
          return { faqs: [] };
        },
      },
    ],
  },
]);

import { useRoutes } from "react-router-dom";
import Product from "./pages/Product";

const NotFound = () => {
  return (
    <div className="not_found">
      <h1 className="display-4">404</h1>
      <p>страница не доступна</p>
    </div>
  );
};

export default function AppRoutes() {
  let routes = useRoutes([
    {
      path: "/",
      element: <></>,
    },
    {
      path: "register",
      element: <>register</>,
    },
    {
      path: "login",
      element: <>login</>,
    },
    {
      path: "product",
      element: <Product />,
    },
    { path: "*", element: <NotFound /> },
  ]);
  return routes;
}

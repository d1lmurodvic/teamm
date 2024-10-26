import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";
import Integration from "./pages/Integration";
import Calendar from "./pages/Calendar";
import Pages from "./pages/Pages";
import Settings from "./pages/Settings";
import Documentation from "./pages/Documentation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/", element: <Dashboard/> },
      { path: "leads", element: <Leads/> },
      { path: "transactions", element: <Transactions/> },
      { path: "analytics", element: <Analytics/> },
      { path: "integration", element: <Integration/> },
      { path: "calendar", element: <Calendar/> },
      { path: "pages", element: <Pages/> },
      { path: "settings", element: <Settings/> },
      { path: "documentation", element: <Documentation/> } 
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
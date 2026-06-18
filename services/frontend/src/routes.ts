import { createBrowserRouter } from "react-router";
import Home from "./pages/index/home";

export const routes = createBrowserRouter([
	{
		path: "",
		Component: Home,
	},
]);

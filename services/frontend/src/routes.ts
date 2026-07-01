import { createBrowserRouter } from "react-router";
import Flux from "./pages/flux/flux";
import Home from "./pages/index/home";

export const routes = createBrowserRouter([
	{
		path: "",
		Component: Home,
	},
	{
		path: "/flux",
		Component: Flux,
	},
]);

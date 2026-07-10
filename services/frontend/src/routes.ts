import { createBrowserRouter } from "react-router";
import Favorite from "./pages/favorite/favorite";
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
	{
		path: "/favorite",
		Component: Favorite,
	},
]);

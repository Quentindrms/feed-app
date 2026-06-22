export type Weight =
	| "thin"
	| "extralight"
	| "light"
	| "normal"
	| "medium"
	| "semibold"
	| "bold"
	| "extrabold"
	| "black";

export const weightClasses: Record<Weight, string> = {
	thin: "font-thin",
	extralight: "font-extralight",
	light: "font-light",
	normal: "font-normal",
	medium: "font-medium",
	semibold: "font-semibold",
	bold: "font-bold",
	extrabold: "font-extrabold",
	black: "black",
};

export type Size =
	| "3xs"
	| "2xs"
	| "xs"
	| "sm"
	| "md"
	| "lg"
	| "xl"
	| "2xl"
	| "3xl"
	| "4xl"
	| "5xl"
	| "6xl"
	| "7xl";

export const textSizeClasses: Record<Size, string> = {
	"7xl": "text-7xl",
	"6xl": "text-6xl",
	"5xl": "text-5xl",
	"4xl": "text-4xl",
	"3xl": "text-3xl",
	"2xl": "text-2xl",
	xl: "text-xl",
	lg: "text-lg",
	md: "text-md",
	sm: "text-sm",
	xs: "text-xs",
	"2xs": "text-2xs",
	"3xs": "text-3xs",
};

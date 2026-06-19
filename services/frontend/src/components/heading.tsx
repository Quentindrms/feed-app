import { type Size, textSizeClasses } from "@src/utils/style/sizeClasses";
import clsx from "clsx";
import type { ReactNode } from "react";

interface HeadingProps {
	children: ReactNode;
	component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	size: Size;
}

export default function Heading(props: HeadingProps) {
	return (
		<props.component className={clsx([textSizeClasses[props.size], "font-title"])}>
			{props.children}
		</props.component>
	);
}

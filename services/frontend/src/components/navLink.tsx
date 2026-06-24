import clsx from "clsx";
import type { ReactNode } from "react";

interface NavLinkProps {
	children: ReactNode;
	link: string;
}

export default function NavLink(props: NavLinkProps) {
	return (
		<a
			className={clsx([
				"font-title font-bold text-muted-text text-2xl hover:text-muted-text-dark hover:scale-110 hover:rotate-1 transition-transform duration-150",
			])}
			href={props.link}
		>
			{props.children}
		</a>
	);
}

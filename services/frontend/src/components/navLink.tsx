import clsx from "clsx";
import type { ReactNode } from "react";

interface NavLinkProps {
	children: ReactNode;
	link: string;
}

export default function NavLink(props: NavLinkProps) {
	return (
		<a
			className={clsx(["font-title font-bold text-muted-text hover:text-muted-text-dark"])}
			href={props.link}
		>
			{props.children}
		</a>
	);
}

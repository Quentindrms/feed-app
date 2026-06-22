import type { ReactNode } from "react";

interface LinkProps {
	children: ReactNode;
	href: string;
}

export default function Link(props: LinkProps) {
	return (
		<a
			className="text-muted-text hover:text-muted-text-dark font-base hover:underline"
			href={props.href}
		>
			{props.children}
		</a>
	);
}

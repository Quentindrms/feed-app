import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
	onClick: () => void;
}

export default function Button(props: ButtonProps) {
	return (
		<button
			onClick={props.onClick}
			type={props.type ?? "button"}
			className="w-3xs p-2 bg-action-purple/95 hover:bg-action-purple rounded-lg text-center text-light text-xl"
		>
			{props.children}
		</button>
	);
}

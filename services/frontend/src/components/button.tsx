import type { ButtonHTMLAttributes, ReactNode } from "react";
import Text from "./text";

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

interface PaginationButtonProps {
	number: number;
	onClick: () => void;
}

export function PaginationButton(props: PaginationButtonProps) {
	return (
		<button
			onClick={props.onClick}
			type="button"
			className="flex text-light justify-center items-center w-10 bg-action-purple/85 p-4 rounded-2xl hover:bg-action-purple/90 hover:scale-103 transition-transform duration-500"
		>
			<Text component="p" size="2xs" weight="normal">
				{props.number}
			</Text>
		</button>
	);
}

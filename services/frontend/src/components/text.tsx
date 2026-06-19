import { type Size, textSizeClasses } from "@src/utils/style/sizeClasses";
import { type Weight, weightClasses } from "@src/utils/style/weightClasses";
import clsx from "clsx";
import type { ReactNode } from "react";

interface Textprops {
    children: ReactNode;
    size: Size;
    component: "p" | "span";
    weight: Weight;
}

export default function Text(props: Textprops) {
    return (
        <props.component
            className={clsx([
                textSizeClasses[props.size],
                "font-base",
                weightClasses[props.weight],
            ])}
        >
            {props.children}
        </props.component>
    );
}

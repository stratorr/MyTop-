import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface LabelProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: "small" | "medium";
    children: ReactNode;
    color?: "ghost" | "red" | "gray" | "green" | "primary";
    href?: string;
}

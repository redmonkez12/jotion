import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className={"h-full bg-red-500 text-white"}>{children}</div>
    );
}
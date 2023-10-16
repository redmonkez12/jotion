import { PropsWithChildren } from "react";

export default function MarketingLayout({ children }: PropsWithChildren) {
    return (
        <div className="h-full dark:bg-[#1F1F1F]">
            <main className="h-full pt-40">
                {children}
            </main>
        </div>
    );
};

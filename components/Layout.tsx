import React from "react";
import Navbar from "./global/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-5xl mx-auto">
            <Navbar />
            <div className="prose prose-pink">
                {children}
            </div>
        </div>
    )
}
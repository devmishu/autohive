
"use client";

import { ThemeProvider } from "next-themes";

export function HeroThemeProviders({ children }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            {children}
        </ThemeProvider>
    );
}
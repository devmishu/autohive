"use client";

import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "@gravity-ui/icons";

export function ThemeSwitch() {
    const { theme, setTheme } = useTheme();

    return (
        <Switch
            isSelected={theme === "dark"}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            classNames={{

                base: "rounded-full",

                wrapper: `h-[31px] w-[51px] mr-0 rounded-full transition-colors duration-300 ${theme === "dark"
                    ? "bg-zinc-800 border border-zinc-700 shadow-[0_0_12px_rgba(255,255,255,0.1)]"
                    : "bg-zinc-200 border border-zinc-300"
                    }`
            }}
        >
            {({ isSelected }) => (
                <div className="size-[25px] bg-white rounded-full flex items-center justify-center shadow-sm">
                    {isSelected ? (
                        <Moon className="size-3.5 text-zinc-900" />
                    ) : (
                        <Sun className="size-3.5 text-amber-500" />
                    )}
                </div>
            )}
        </Switch>
    );
}
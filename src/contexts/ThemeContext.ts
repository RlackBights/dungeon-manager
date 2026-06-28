import { createContext } from "react";
import type { Themes } from "../models/themeModel";

export const ThemeContext = createContext<{theme: Themes, setTheme: React.Dispatch<React.SetStateAction<Themes>>}>({theme: (localStorage.getItem("theme")! as Themes), setTheme: (() => {})});
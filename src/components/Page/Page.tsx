import { createBrowserRouter, RouterProvider } from "react-router";
import MainMenu from "../MainMenu/MainMenu";
import { createContext, useEffect, useState } from "react";
import { Themes } from "../../models/themeModel";


let router = createBrowserRouter([
  {
    path: "/",
    Component: MainMenu
  },
])

if (localStorage.getItem("theme") == null /* TODO: test if theme is part of the Themes type */) localStorage.setItem("theme", "dark");

export const ThemeContext = createContext<{theme: Themes, setTheme: React.Dispatch<React.SetStateAction<Themes>>}>({theme: (localStorage.getItem("theme")! as Themes), setTheme: (() => {})});


export default function Page() {
    const [theme, setTheme] = useState<Themes>(Themes.Dark);

    useEffect(() => {
        document.documentElement.dataset.theme = theme.toLowerCase();
    }, [theme]);
    
    return (
      <ThemeContext.Provider value={{theme, setTheme}}>
        <RouterProvider router={router} />
      </ThemeContext.Provider>
    )
}
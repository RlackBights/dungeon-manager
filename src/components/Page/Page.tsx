import { createBrowserRouter, redirect, RouterProvider } from "react-router";
import MainMenu from "../MainMenu/MainMenu";
import { useEffect, useState } from "react";
import { Themes } from "../../models/themeModel";
import LoginPage from "../LoginPage/LoginPage";
import { ThemeContext } from "../../contexts/ThemeContext";
import { TestUserSession } from "../../requests/Login/LoginRequests";
import ProfilePage from "../ProfilePage/ProfilePage";

async function requireAuth() {
  console.log(document.cookie)
  const isAuthenticated = await TestUserSession();
  if (!isAuthenticated) throw redirect('/login');
}

let router = createBrowserRouter([
  {
    path: "/",
    Component: MainMenu
  },
  {
    path: "/login",
    Component: LoginPage
  },
  {
    path: "/profile",
    loader: requireAuth,
    Component: ProfilePage
  }
])
if (localStorage.getItem("theme") == null  || !Object.keys(Themes).map((t) => t.toLowerCase()).includes(localStorage.getItem("theme")!)/* TODO: test if theme is part of the Themes type */) localStorage.setItem("theme", Object.keys(Themes)[0].toLowerCase());


export default function Page() {
    const [theme, setTheme] = useState<Themes>(Themes.Book);

    useEffect(() => {
        document.documentElement.dataset.theme = theme.toLowerCase();
    }, [theme]);
    
    return (
      <ThemeContext.Provider value={{theme, setTheme}}>
        <RouterProvider router={router} />
      </ThemeContext.Provider>
    )
}
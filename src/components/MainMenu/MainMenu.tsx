import { useContext, useEffect } from 'react'
import './MainMenu.css'
import { ThemeContext } from '../Page/Page'
import { Themes } from '../../models/themeModel';

export default function MainMenu()
{
    const { theme, setTheme } = useContext(ThemeContext);
    
    const themes = Object.keys(Themes);
    return (
        <div id='main-menu'>
            <button id='set-theme' onClick={() => {
                setTheme(curr => themes[(themes.indexOf(curr) + 1) % (themes.length)] as Themes);

            }}>
                switch to<br/>{themes[(themes.indexOf(theme) + 1) % (themes.length)]}
            </button>
            <div id='sidebar'>
                <h1>[Projekt név]</h1>
                <div>
                    <button id='profile'>Profile</button>
                    <button id='characters'>Characters</button>
                    <button id='create'>Create</button>
                    <button id='login'>Login</button>
                </div>
            </div>
            <div id='campaign-container'>
                {new Array(10).fill(0).map((_, i) => (
                    <div key={i} className='campaign-card'>
                        <p>{i}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
import { useContext } from 'react'
import './MainMenu.css'
import { Themes } from '../../models/themeModel';
import { useNavigate } from 'react-router';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function MainMenu()
{
    const { theme, setTheme } = useContext(ThemeContext);
    const navigate = useNavigate();
    
    const themes = Object.keys(Themes);
    return (
        <div id='main-menu'>
            {/*  */}
            <button id='set-theme' onClick={() => {
                setTheme(curr => themes[(themes.indexOf(curr) + 1) % (themes.length)] as Themes);

            }}>
                switch to<br/>{themes[(themes.indexOf(theme) + 1) % (themes.length)]}
            </button>
            <div id='sidebar'>
                <h1>[Projekt név]</h1>
                <div>
                    <button id='profile' onClick={() => {
                        navigate('/profile');
                    }}>Profile</button>
                    <button id='characters'>Characters</button>
                    <button id='create'>Create</button>
                </div>
                <button id='login' onClick={() => {
                    navigate('/login');
                }}>Login</button>
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
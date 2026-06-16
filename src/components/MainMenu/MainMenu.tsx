import './MainMenu.css'

export default function MainMenu()
{
    return (
        <div id='main-menu'>
            <div id='sidebar'>
                <h1>[Projekt név]</h1>
                <div>
                    <button id='profile'>Profile</button>
                    <button id='characters'>Characters</button>
                    <button id='create'>Create</button>
                </div>
                <button id='login'>Login</button>
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
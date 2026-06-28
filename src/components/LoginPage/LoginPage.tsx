import { useNavigate } from 'react-router';
import './LoginPage.css'
import { useLoading } from '../../hooks/LoadHook';
import { LoginUser } from '../../requests/Login/LoginRequests';

export default function LoginPage() {
    const navigate = useNavigate();
    const [isLoading, withLoading] = useLoading();

    return (
        <div id="login-page">
            <div id="chain-left"></div>
            <div id="chain-right"></div>
            <div id='login-form'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    withLoading(() => LoginUser(formData.get("username-email") as string, formData.get("password") as string, formData.get("remember") === "on" ))
                }}>
                    <input type="text" name="username-email" id="username-email" placeholder='username/email'/>
                    <input type="password" name='password' id='password' placeholder='password'/>
                    <div id="options">
                        <a style={{ marginBottom: "50px", display: "block" }} onClick={() => {}}>Forgot my password</a>
                        <div >
                            <label htmlFor="remember">Remember me: </label>
                            <input type="checkbox" name="remember" id="remember" />
                        </div>
                    </div>
                    <button type="submit">Log in</button>
                    <p id='info'>Don't have an account yet? <a onClick={() => {}}>Register!</a></p>
                </form>
            </div>
        </div>
    )
}
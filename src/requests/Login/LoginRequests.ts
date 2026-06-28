import { BACKEND_URL } from "../Backend";
const usernameRegex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;

export async function TestUserSession() {
    const res = await fetch(BACKEND_URL + 'users/login', { method: "GET", credentials: "include" });
    console.log(res);
    if (res.status === 200) return true;
    else return false;
}

export async function LoginUser(username_email: string, password: string, remember: boolean) {
    console.log(username_email);
    
    const res = await fetch(BACKEND_URL + 'users/login', { method: "POST", credentials: "include", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ user: { username: username_email, email: username_email, password: password }, remember}) })
    console.log(res);
}
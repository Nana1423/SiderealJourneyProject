import "../Styles/Login.css"

// Components
import Header from "../Components/Header";
import Button from '@mui/material/Button';
import BackgroundVideo from "../Components/BackgroundVideo";

// Assets
import LoginVideo from "../../public/LoginBG.mp4"
import Astronaut from "../../public/astronaut-helmet.png"

export default function Login() {
    return (
        <>
            <Header />
            <main className="main-login">
                <div className="login-div">
                    <div className="login-text">
                        <h2>Welcome</h2>
                        <img src={Astronaut} alt="Icon" />
                    </div>
                    <form action="" className="login-form">
                        <input className="user-login" type="text" placeholder="User" name="" id="" />
                        <input className="password-login" type="password" placeholder="Password" name="" id="" />
                        <Button variant="contained" className="submit-login" type="submit">Login</Button>
                    </form>
                </div>
            </main>
            <BackgroundVideo video={LoginVideo} />
        </>
    )
}
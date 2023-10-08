import "../Styles/Login.css"

// Components
import Header from "../Components/Header";
import Button from '@mui/material/Button';
import BackgroundVideo from "../Components/BackgroundVideo";

// Assets
import LoginVideo from "../../public/LoginBG.mp4"
import SettingsIcon from '@mui/icons-material/Settings';

export default function Config() {
    return (
        <>
            <Header />
            <main className="main-login">
                <div className="login-div">
                    <div className="login-text">
                        <h2>Settings</h2>
                        <SettingsIcon className="settings-icon"/>
                    </div>
                    <form action="" className="login-form">
                    <input className="user-login" type="password" placeholder="Current Password" name="" id="" />
                        <input className="user-login" type="text" placeholder="New Password" name="" id="" />
                        <input className="password-login" type="text" placeholder="Confirm Password" name="" id="" />
                        <Button variant="contained" className="submit-login" type="submit">Confirm</Button>
                    </form>
                </div>
            </main>
            <BackgroundVideo video={LoginVideo} />
        </>
    )
}
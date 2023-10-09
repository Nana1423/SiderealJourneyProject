import "../Styles/Header.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import NemesisTypo from "../../public/Nemesis_Typo.png"

export default function Header() {
    return (
        <>
            <header>
                <a href="/"><img src={NemesisTypo} alt="Logo" /></a>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Crew">Crew</a></li>
                    <li><a href="/Login"><AccountCircleIcon className="userIcon"/></a></li>
                </ul>
            </header>
        </>
    )
}
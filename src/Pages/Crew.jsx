// Profiles Images
import Harry from "../../public/harry_profile.jpg"
import Emanuel from "../../public/emanuel_profile.jpg"
import Nicole from "../../public/nicole_profile.jpg"
import Bradly from "../../public/bradly_profile.jpg"
import Carlos from "../../public/carlos_profile.png"
import Video from "../../public/Eclipse_BG2.mp4"

// Componentes
import Header from "../Components/Header"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BackgroundVideo from "../Components/BackgroundVideo"

// Styles
import "../Styles/Crew.css"

export default function Crew() {
    return (
        <>
            <Header />
            <main className="main-crew">
                <h1>Nemesis Crew</h1>
                <div className="div-profile">
                    <div className="profile">
                        <img src={Harry} alt="" />
                        <aside>
                            <p>Harry Bodan</p>
                            <a target="_blank" href="https://www.linkedin.com/in/harry-bod%C3%A1n-3a9875236/"><LinkedInIcon/></a>
                        </aside>
                    </div>
                    <div className="profile">
                        <img src={Emanuel} alt="" />
                        <aside>
                            <p>Emanuel Leite</p>
                            <a target="_blank" href="https://www.linkedin.com/in/emanuel-leite-8a4005251/"><LinkedInIcon/></a>
                        </aside>
                    </div>
                    <div className="profile">
                        <img src={Nicole} alt="" />
                        <aside>
                            <p>Nicole Espinoza</p>
                            <a target="_blank" href="https://www.linkedin.com/in/nicole-arana-espinoza-19b30b295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><LinkedInIcon/></a>
                        </aside>
                    </div>
                </div>
                <div className="div-profile">
                    <div className="profile">
                        <img src={Carlos} alt="" />
                        <aside>
                            <p>Carlos Fernando</p>
                            <a target="_blank" href="https://www.linkedin.com/in/fernando-a-2a24591a1/"><LinkedInIcon/></a>
                        </aside>
                    </div>
                    <div className="profile">
                        <img src={Bradly} alt="" />
                        <aside>
                            <p>Bradly Gutierrez</p>
                            <a target="_blank" href="https://www.linkedin.com/in/bradly-guti%C3%A9rrez-8b092b225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><LinkedInIcon/></a>
                        </aside>
                    </div>
                </div>
            </main>
            <BackgroundVideo video={Video} />
        </>
    )
}
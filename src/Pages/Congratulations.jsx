import Header from "../Components/Header"
import BackgroundVideo from "../Components/BackgroundVideo"

// Assets
import video from "../../public/Tierra_Sol_Luna.mp4"

import "../Styles/Congratulations.css"

export default function Congratulations() {
    return(
        <>
            <Header/>
            <main className="main-login">
                <div className="bye-div">
                    <h2>Thank you!!!</h2>
                    <p>"You've reached the end of the journey. We appreciate your time and effort in exploring our content. If you have any questions or need further assistance, feel free to reach out. Thank you for being a part of our community!"</p>
                </div>
            </main>
            <BackgroundVideo video={video}/>
        </>
    )
}
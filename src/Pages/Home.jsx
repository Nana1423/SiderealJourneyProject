import "../Styles/Home.css"

// Components
import Header from "../Components/Header"
import Button from '@mui/material/Button';
import BackgroundVideo from "../Components/BackgroundVideo";

// Video
import HomeVideo from "../../public/Eclipse_Video.mp4" 

export default function Home() {
    return (
        <>
            <Header />
            <main className="home">
                <section className="home-section">
                    <h1>Hello, Astronauts</h1>
                    <h2>Let’s discover the eclipses</h2>
                    <a href="/slide1"><Button variant="contained">Click here to start your journey!</Button></a>
                </section>
                <p>Developed by Nemesis Crew</p>
            </main>
            <BackgroundVideo video={HomeVideo}/>
        </>
    )
}

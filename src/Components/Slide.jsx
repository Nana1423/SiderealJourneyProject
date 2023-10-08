import "../Styles/Slide.css"

// Components
import Header from "./Header"

// Assets
import SlideVideo from "../../public/Slide1.mp4"

export default function Slide({ title, text, reference, video }) {
    return (
        <>
            <Header />
            <main className="main-slide">
                <section class="main-text-section">
                    <h1 class="explantion-1H1">Why do only some people on Earth see an eclipse at a given time?</h1>
                    <p class="explantion-1P">Not everyone on Earth sees an eclipse at a given time because eclipses occur in specific regions due to the alignment of the Sun, Earth, and Moon. Solar eclipses have a narrow path of totality, and lunar eclipses are visible from the nighttime side of the Earth where the Moon is above the horizon. The rest of the world may not see the eclipse because they are not in the right position to witness it.
                    </p>
                    <a id="more-information">You can check more info here</a>
                </section>
                <aside class="animation-section">
                    <video autoPlay loop muted src={SlideVideo} />
                </aside>
            </main>
        </>
    )
}
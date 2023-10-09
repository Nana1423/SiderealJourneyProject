import "../Styles/Slide.css"

// Components
import Header from "./Header"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function Slide({ title, text, href, video, nextSlideNumber }) {
    return (
        <>
            <Header />
            <main className="main-slide">
                <section class="main-text-section">
                    <h1 class="explantion-1H1">{title}</h1>
                    <p class="explantion-1P">{text}</p>
                    <a href={href} id="more-information">You can check more info here</a>
                </section>
                <aside class="animation-section">
                    <video autoPlay loop muted src={video} />
                </aside>
            </main>
            {nextSlideNumber && <a className="arrow" href={`/slide${nextSlideNumber}`} ><ArrowCircleRightIcon/></a>}
        </>
    )
}
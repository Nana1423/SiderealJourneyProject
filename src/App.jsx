import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Config from "./Pages/Config"
import Slide from "./Components/Slide"
import Congratulations from "./Pages/Congratulations"
import Crew from "./Pages/Crew"

import { Routes, Route } from "react-router-dom"

// Assets
import Slide1 from "../public/Slide1.mp4"
import Slide2 from "../public/Globo_Dorado.mp4"
import Slide3 from "../public/Orbita.mp4"
import Slide4 from "../public/Niños_viendo.mp4"
import Slide5 from "../public/sol3.mp4"
import Slide6 from "../public/Luna_orbitando.mp4"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/config" element={<Config />} />
        <Route path="/slide7" element={<Congratulations />} />
        <Route path="/crew" element={<Crew />} />
        <Route
          path="/slide1"
          element={<Slide
            title="How do eclipses occur?"
            text="Eclipses occur when one celestial body blocks the light from another, with solar eclipses involving the Moon blocking the Sun and lunar eclipses involving the Earth's shadow covering the Moon."
            href=""
            video={Slide1}
            nextSlideNumber="2"
          />} 
        />
        <Route
          path="/slide2"
          element={<Slide
            title="Why do only some people on Earth see an eclipse at a given time?"
            text="Not everyone on Earth sees an eclipse at a given time because eclipses occur in specific regions due to the alignment of the Sun, Earth, and Moon. Solar eclipses have a narrow path of totality, and lunar eclipses are visible from the nighttime side of the Earth where the Moon is above the horizon. The rest of the world may not see the eclipse because they are not in the right position to witness it."
            href=""
            video={Slide2}
            nextSlideNumber="3"
          />} 
        />
        <Route
          path="/slide3"
          element={<Slide
            title="What causes the Sun, Moon, and Earth to align?"
            text="The alignment of the Sun, Moon, and Earth that causes eclipses occurs because of the orbits and positions of these celestial bodies in space, with occasional alignment during eclipse seasons."
            href=""
            video={Slide3}
            nextSlideNumber="4"
          />} 
        />
        <Route
          path="/slide4"
          element={<Slide
            title="How do scientists know when and where eclipses will occur?"
            text="Scientists predict eclipses using mathematical models, computer simulations, and astronomical data to calculate precise times and locations based on the orbits and positions of celestial bodies."
            href=""
            video={Slide4}
            nextSlideNumber="5"
          />} 
        />
        <Route
          path="/slide5"
          element={<Slide
            title="What is the difference between a lunar and solar eclipse?"
            text="A lunar eclipse occurs when Earth passes between the Sun and the Moon, casting a shadow on the Moon. A solar eclipse happens when the Moon passes between the Sun and Earth, casting a shadow on a specific region of Earth's surface."
            href=""
            video={Slide5}
            nextSlideNumber="6"
          />} 
        />
        <Route
          path="/slide6"
          element={<Slide
            title="What is an eclipse season and why do they occur approximately every six months (or twice a year)?"
            text="Eclipse seasons occur approximately every six months because of the alignment of the Moon's orbit with respect to Earth's orbit and the Sun. During these periods, solar and lunar eclipses are more likely to happen due to the Moon passing near its orbital nodes."
            href=""
            video={Slide6}
            nextSlideNumber="7"
          />} 
        />
      </Routes>
    </>
  )
}

export default App

import React from "react"
import AboutMe from "../sections/AboutMe"
import Skills from "../sections/Skills"
import Experience from "../sections/Experience"
import Certifications from "../sections/Certifications"
import Education from "../sections/Education"

function Content() {
    return(
        <main>
            <AboutMe />
            <Skills />
            <Experience />
            <Education />
            <Certifications />
        </main>
    )
}

export default Content

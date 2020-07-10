import React from "react"
import AboutMe from "../sections/AboutMe"
import Skills from "../sections/Skills"
import Experience from "../sections/Experience"
import Education from "../sections/Education"
import Articles from "../sections/Articles"

function Content() {
    return(
        <main>
            <AboutMe />
            <Skills />
            <Experience />
            <Education />
            <Articles />
        </main>
    )
}

export default Content

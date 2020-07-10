import React from "react"

import Timeline from "../elements/EducationTimeline"
import CertificationTimeline from "../elements/CertificationTimeline"

function Education() {
    return(
        <section className="section" id="education">
            <div className="container">
                <h1 className="title">Education</h1>
                <div className="columns">
                    <div className="column is-6">
                        <div className="has-text-centered">
                            <h2 className="title is-5">School & University</h2>
                        </div>
                        <Timeline/>
                    </div>
                    <div className="column is-6">
                        <div className="has-text-centered">
                            <h2 className="title is-5">Certifications</h2>
                        </div>
                        <CertificationTimeline/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education


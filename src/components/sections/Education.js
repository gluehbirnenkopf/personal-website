import React from "react"

import Timeline from "../elements/EducationTimeline"

function Education() {
    return(
        <section className="section" id="education">
            <div className="container">
                <h1 className="title">Education</h1>
                <div className="columns">
                    <div className="column is-6">
                        <div className="has-text-centered">
                            <span className="icon has-text-link">
                                <i className="fas fa-3x fa-cogs"></i>
                            </span>
                            <h2 className="title is-5">Professional Education</h2>
                        </div>
                        <Timeline/>
                    </div>
                    <div className="column is-6">
                        <div className="has-text-centered">
                            <span className="icon has-text-link">
                                <i className="fas fa-3x fa-laptop-code"></i>
                            </span>
                            <h2 className="title is-5">Education</h2>
                        </div>
                        <Timeline/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education


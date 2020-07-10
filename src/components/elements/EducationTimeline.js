import React from "react"
import EducationTimelineItem from "./EducationTimelineItem"
import Resume from "../../resume.json"

function EducationTimeline() {
    return(
        <div className="timeline is-centered">
            <header className="timeline-header">
                <span className="tag is-medium is-dark">{new Date().getFullYear()}</span>
            </header>
            <div className="education-timeline-item">
                <div className="timeline-marker is-success"></div>
                <div className="timeline-content"></div>
            </div>
            {
                Resume.education.map((item) => {return new Date(item.startDate).getFullYear()}).map((year, index) => {
                    let content = []
                    content.push(<header key={index} className="timeline-header">
                                    <span className="tag is-success">{year}</span>
                                   </header>)
                    content.push(Resume.education.filter(education => new Date(education.startDate).getFullYear() === year).map((item, index) => {
                            return <EducationTimelineItem
                                        key = {index}
                                        startDate = {new Date(item.startDate).toLocaleString('en-UK', {month:'long', year: 'numeric'})}
                                        endDate = {new Date(item.endDate).toLocaleString('en-UK', {month:'long', year: 'numeric'})}
                                        institution = {item.institution}
                                        area = {item.area}
                                        image =  {item.image}                                                      
                                        studyType = {item.studyType}
                                        courses = {item.courses}
                                    />
                        }))
                    return content
                })
            }
        </div>
    )
}

export default EducationTimeline

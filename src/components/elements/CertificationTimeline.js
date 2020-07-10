import React from "react"
import CertificationTimelineItem from "./CertificationTimelineItem"
import Resume from "../../resume.json"

function CertificationTimeline() {
    return(
        <div className="timeline is-centered">
            <header className="timeline-header">
                <span className="tag is-medium is-dark">{new Date().getFullYear()}</span>
            </header>
            <div className="certification-timeline-item">
                <div className="timeline-marker is-success"></div>
                <div className="timeline-content"></div>
            </div>
            {
                Resume.certifications.map((item) => {return new Date(item.startDate).getFullYear()}).map((year, index) => {
                    let content = []
                    content.push(<header key={index} className="timeline-header">
                                    <span className="tag is-success">{year}</span>
                                   </header>)
                    content.push(Resume.certifications.filter(certifications => new Date(certifications.startDate).getFullYear() === year).map((item, index) => {
                            return <CertificationTimelineItem
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

export default CertificationTimeline

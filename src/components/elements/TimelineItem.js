import React from "react";

function TimelineItem(props) {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-32x32">
        <img src={props.image} alt="" />
      </div>
      <div className="timeline-content">
        <p className="heading">{props.startDate} - {props.endDate}</p>
        <h1 className="title is-4">{props.client}</h1>
        <h3 className="title is-5">{props.position} for {props.company}</h3>
        <p style={{maxWidth: '25em'}}>{props.summary}</p>
      </div>
    </div>
  );
}

export default TimelineItem

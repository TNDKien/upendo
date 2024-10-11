import React from "react";
import { render } from "storyblok-rich-text-react-renderer";

const Schedule = ({ blok }) => (
  <div className="Schedule">
    <div style={{ padding: "24px" }}>
      <div className="intro_schedule">

        {/* Render de Schedule title */}
        {blok.schedule_title && (
          <div className="schedule_title">{render(blok.schedule_title)}</div>
        )}

        {/* Render de Schedule text */}
        {blok.schedule_text && (
          <div className="schedule_text">{render(blok.schedule_text)}</div>
        )}

        {/* Render de Schedule appointment*/}
        {blok.schedule_appointment && (
          <div className="schedule_appointment"> {render(blok.schedule_appointment)}</div>
        )}
      </div>

      {/* Render de training text */}
      {blok.Datepicker && (
        <div className="Datepicker">{render(blok.Datepicker)}</div>
      )}

      
    </div>
  </div>
);

export default Schedule;

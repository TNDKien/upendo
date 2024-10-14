import { render } from "storyblok-rich-text-react-renderer";
import "./schedule_section.css";

const Schedule_section = ({ blok }) => (
  <div className="schedule_section">
    <div style={{ padding: "24px" }}>
        
      {/* Render de training title*/}
      {blok.schedule_appointment && (
        <div className="schedule_appointment">
          {render(blok.schedule_appointment)}
        </div>
      )}

      {/* Render de training title*/}
      {blok.schedule_time && (
        <div className="schedule_time">{render(blok.schedule_time)}</div>
      )}

      {/* Render de training title*/}
      {blok.schedule_timebutton && (
        <div className="schedule_timebutton">
          {render(blok.schedule_timebutton)}
        </div>
      )}
    </div>
  </div>
);

export default Schedule_section;

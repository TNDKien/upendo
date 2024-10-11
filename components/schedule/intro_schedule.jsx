import { render } from "storyblok-rich-text-react-renderer";
import "./Intro_schedule.css";

const Intro_schedule = ({ blok }) => (
  <div className="Intro_schedule">
    <div style={{ padding: "24px" }}>
      {/* Render de training title*/}
      {blok.schedule_title && (
        <div className="schedule_title">{render(blok.schedule_title)}</div>
      )}

      {/* Render de training title*/}
      {blok.schedule_text && (
        <div className="schedule_text">{render(blok.schedule_text)}</div>
      )}

      {/* Render de Schedule appointment*/}
      {blok.schedule_appointment && (
        <div className="schedule_appointment"> {render(blok.schedule_appointment)}</div>
      )}
    </div>
  </div>
);

export default Intro_schedule;

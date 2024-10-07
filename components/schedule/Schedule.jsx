import { render } from "storyblok-rich-text-react-renderer";
import "./Schedule.css";

const Schedule = ({ blok }) => (
  <div className="Schedule">
    <div style={{ padding: "24px" }}>
      {/* Render de training title*/}
      {blok.schedule_title && (
        <div className="schedule_title">{render(blok.schedule_title)}</div>
      )}

      {/* Render de training title*/}
      {blok.schedule_text && (
        <div className="schedule_text">{render(blok.schedule_text)}</div>
      )}
    </div>
  </div>
);

export default Schedule;

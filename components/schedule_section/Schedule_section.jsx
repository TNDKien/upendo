import { render } from "storyblok-rich-text-react-renderer";
import "./Schedule_section.css";
import DatePicker from "../date_picker/Date_Picker";

const Schedule_section = ({ blok }) => (
  <div style={{ padding: "24px" }}>
    <div className="schedule_section">
      {/* Render de Schedule appointment */}
      {blok.schedule_appointment && (
        <div className="schedule_appointment">
          {render(blok.schedule_appointment)}
        </div>
      )}

      {/* Render de DatePicker image */}
      {blok.schedule_datepicker && (
        <div className="DatePicker">
          <img
            src={blok.schedule_datepicker.filename}
            alt={blok.schedule_datepicker.alt || "DatePicker Image"}
          />
        </div>
      )}

      {/* Render de DatePicker tussen appointment en time
      <div className="datepicker">
        <DatePicker />
      </div> */}

      {/* Render de Schedule time */}
      {blok.schedule_time && (
        <div className="schedule_time">{render(blok.schedule_time)}</div>
      )}

      {/* Render de Schedule time button */}
      {blok.schedule_timebutton && (
        <div className="schedule_timebutton">
          {render(blok.schedule_timebutton)}
        </div>
      )}
    </div>
  </div>
);

export default Schedule_section;

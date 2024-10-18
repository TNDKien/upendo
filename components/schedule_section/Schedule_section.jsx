import { render } from "storyblok-rich-text-react-renderer";
import "./Schedule_section.css";

const Schedule_section = ({ blok }) => (
  <div className="schedule_section_wrapper">
    <div className="baas_van_upendo">
      <img
        src={blok.baas_van_upendo.filename}
        alt={blok.baas_van_upendo.alt || "Baas van Upendo"}
      />
    </div>

    <div className="schedule_section">
      {blok.schedule_appointment && (
        <div className="schedule_appointment">
          {render(blok.schedule_appointment)}
        </div>
      )}

      {blok.schedule_datepicker && (
        <div className="DatePicker">
          <img
            src={blok.schedule_datepicker.filename}
            alt={blok.schedule_datepicker.alt || "DatePicker Image"}
          />
        </div>
      )}

      {blok.schedule_time && (
        <div className="schedule_time">{render(blok.schedule_time)}</div>
      )}

      {blok.schedule_timebutton && (
        <div className="schedule_timebutton">
          {render(blok.schedule_timebutton)}
        </div>
      )}

      {blok.schedule_button && (
        <div className="schedule_button">
          {render(blok.schedule_button)}
        </div>
      )}
    </div>
  </div>
);

export default Schedule_section;

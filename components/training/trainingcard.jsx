import { render } from "storyblok-rich-text-react-renderer";
import "./Trainingcards.css";

const TrainingCard = ({ blok }) => (
  <div className="trainingcard">
    <div style={{ padding: "24px" }}>
      {blok.training_title && (
        <div className="training_title">{render(blok.training_title)}</div>
      )}

      {/* Render de Training Header */}
      {blok.training_header && (
        <div className="training_header">{render(blok.training_header)}</div>
      )}

      {/* Render de Training Image */}
      {blok.training_image && blok.training_image.filename && (
        <div className="training_image_container">
          <img
            className="training_image"
            src={blok.training_image.filename}
            alt={blok.training_header?.content?.[0]?.text || "training image"}
          />
        </div>
      )}

      {/* Render de Visual Ball */}
      {blok.visual_ball && blok.visual_ball.filename && (
        <div className="visual_ball_container">
          <img
            className="visual_ball"
            src={blok.visual_ball.filename}
            alt={blok.training_header?.content?.[0]?.text || "visual ball"}
          />
        </div>
      )}

      {/* Render de Training Paragraph */}
      {blok.training_paragraph && (
        <div className="training_paragraph">
          {render(blok.training_paragraph)}
        </div>
      )}

      {/* Render de Training Schedule */}
      {blok.schedule_training && (
        <div className="schedule_training">
          {render(blok.schedule_training)}
        </div>
      )}
    </div>
  </div>
);



export default TrainingCard;

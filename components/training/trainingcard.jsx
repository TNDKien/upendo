import { render } from "storyblok-rich-text-react-renderer";
import "./trainingcards.css";

const TrainingCard = ({ blok }) => (
  <div className="trainingcard">
    <div style={{ padding: "24px" }}>
      {blok.training_title && (
        <div className="training_title">{render(blok.training_title)}</div>
      )}

      {blok.training_text && (
        <div className="training_text">{render(blok.training_text)}</div>
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

    {/* Render de Leftvisual Ball */}
    {blok.leftvisual_ball && blok.leftvisual_ball.filename && (
      <div className="leftvisual_ball_container">
        <img
          className="leftvisual_ball"
          src={blok.leftvisual_ball.filename}
          alt={
            blok.lefttraining_header?.content?.[0]?.text || "leftvisual ball"
          }
        />
      </div>
    )}

    {blok.rightvisual_ball && blok.rightvisual_ball.filename && (
      <div className="rightvisual_ball_container">
        <img
          className="rightvisual_ball"
          src={blok.rightvisual_ball.filename}
          alt={
            blok.righttraining_header?.content?.[0]?.text || "rightvisual ball"
          }
        />
      </div>
    )}
  </div>
);

export default TrainingCard;

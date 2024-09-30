import { render } from "storyblok-rich-text-react-renderer";
import "./trainingcards.css";

const TrainingCard = ({ blok }) => (
  <div className="trainingcard">
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
      <div className="schedule_training">{render(blok.schedule_training)}</div>
    )}
  </div>
);

export default TrainingCard;

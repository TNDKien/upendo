import { render } from "storyblok-rich-text-react-renderer";
import "./Intro_training.css";

const Intro_training = ({ blok }) => (
  <div className="Intro_training">
      {/* Render de training title*/}
      {blok.training_title && (
        <div className="training_title">{render(blok.training_title)}</div>
      )}

      {/* Container voor afbeelding en tekst */}
      <div className="training_content_container">
        <div className="trainingimage_meneer">
          <img
            className="trainingimage_meneer"
            src={blok.trainingimage_meneer.filename}
            alt="training image meneer"
          />
        </div>

        {/* Render de training_text */}
        {blok.training_text && (
          <div className="training_text">{render(blok.training_text)}</div>
        )}
      </div>
    </div>
);

export default Intro_training;

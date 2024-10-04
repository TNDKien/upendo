import { render } from "storyblok-rich-text-react-renderer";
import "./Intro_training.css";

const Intro_training = ({ blok }) => (
  <div className="Intro_training">
    <div style={{ padding: "24px" }}>
      {/* Render de training title*/}
      {blok.training_title && (
        <div className="training_title">{render(blok.training_title)}</div>
      )}

      {/* Render de training_text */}
      {blok.training_text && (
        <div className="training_text">{render(blok.training_text)}</div>
      )}
    </div>
  </div>
);

export default Intro_training;

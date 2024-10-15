import { render } from "storyblok-rich-text-react-renderer";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS importeren
import { useEffect } from "react"; // useEffect toevoegen om AOS te initialiseren
import "./trainingcards.css";

const TrainingCard = ({ blok }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // De duur van de animatie in ms
      once: true, // De animatie wordt maar één keer uitgevoerd
    });
  }, []);

  return (
    <div className="trainingcard">
      <div style={{ padding: "24px" }}>
        {/* Render de Training Header */}
        {blok.training_header && (
          <div className="training_header">{render(blok.training_header)}</div>
        )}

        {/* Nieuw blok: Training Image Left */}
        {blok.training_image_left && blok.training_image_left.filename && (
          <div className="training_image_left" data-aos="fade-right">
            <img
              className="training_image"
              src={blok.training_image_left.filename}
              alt="training image left"
            />
          </div>
        )}

        {/* Nieuw blok: Training Image Right */}
        {blok.training_image_right && blok.training_image_right.filename && (
          <div className="training_image_right" data-aos="fade-left">
            <img
              className="training_image"
              src={blok.training_image_right.filename}
              alt="training image right"
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
};

export default TrainingCard;

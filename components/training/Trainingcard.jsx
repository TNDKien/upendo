import { render } from "storyblok-rich-text-react-renderer";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS importeren
import { useEffect } from "react"; // useEffect toevoegen om AOS te initialiseren
import "./Trainingcards.css";

const TrainingCard = ({ blok }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // De duur van de animatie in ms
      once: true, // De animatie wordt maar één keer uitgevoerd
    });
  }, []);

  return (
    <div className="trainingcard">
      <div className="card_content">
        {/* Left Image Layout */}
        {blok.training_image_left && blok.training_image_left.filename && (
          <div className="left_image_layout">
            <div className="training_image_left" data-aos="fade-right">
              <img
                className="training_image"
                src={blok.training_image_left.filename}
                alt="training image left"
              />
            </div>
            <div className="text_content">
              {blok.training_header && (
                <div className="training_header">
                  {render(blok.training_header)}
                </div>
              )}
              {blok.training_paragraph && (
                <div className="training_paragraph">
                  {render(blok.training_paragraph)}
                </div>
              )}
              {blok.schedule_training && (
                <div className="schedule_training">
                  {render(blok.schedule_training)}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Right Image Layout */}
        {blok.training_image_right && blok.training_image_right.filename && (
          <div className="right_image_layout">
            <div className="text_content">
              {blok.training_header && (
                <div className="training_header">
                  {render(blok.training_header)}
                </div>
              )}
              {blok.training_paragraph && (
                <div className="training_paragraph">
                  {render(blok.training_paragraph)}
                </div>
              )}
              {blok.schedule_training && (
                <div className="schedule_training">
                  {render(blok.schedule_training)}
                </div>
              )}
            </div>

            <div className="training_image_right" data-aos="fade-left">
              <img
                className="training_image"
                src={blok.training_image_right.filename}
                alt="training image right"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainingCard;

import { render } from "storyblok-rich-text-react-renderer";
import "./Page_name.css";

const Page_name = ({ blok }) => (
  <div className="">
    {/* Render de Training Header */}
    {blok.title && (
      <div className="title">{render(blok.title)}</div>
    )}
  </div>
);

export default Page_name;

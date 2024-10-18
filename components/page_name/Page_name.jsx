import { render } from "storyblok-rich-text-react-renderer";
import "./Page_name.css";

const Page_name = ({ blok }) => (
  <div className="page_name_title">
    {blok.title && <div className="page_name_title">{render(blok.title)}</div>}
  </div>
);

export default Page_name;

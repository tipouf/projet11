import { Accordion, Banner } from "../../component";
import "./About.scss";
import aboutData from "../../data/aboutData.json";

const About = () => {
  return (
    <>
      <Banner />
      <div className="accordion-container">
        {aboutData.map(({ title, content }) => (
          <div key={title}>
            <Accordion title={title}>{content}</Accordion>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;

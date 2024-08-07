import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  const divStyle = {
    backgroundColor: 'rgb(1,3,40)',
  };
  return (
    <>
      
      <section id="features" className="py-16 md:py-20 lg:py-28" style={divStyle}>
        <div className="container">
          <SectionTitle
            title="OUR SERVICES"
            paragraph="We offer tailored cybersecurity solutions to protect your business from evolving digital threats. From threat detection and response to vulnerability assessments, our services ensure your systems are secure and resilient."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | At CodeSynergy, we are committed to safeguarding your digital world with innovative solutions in cybersecurity,",
  description: "We offer advanced threat detection, vulnerability management, and penetration testing to ensure your digital assets are secure from potential threats. Our solutions are designed to provide real-time protection and insights, helping you stay one step ahead of cyber threats",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="We offer advanced threat detection, vulnerability management, and penetration testing to ensure your digital assets are secure from potential threats. Our solutions are designed to provide real-time protection and insights, helping you stay one step ahead of cyber threats."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;

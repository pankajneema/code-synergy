import Services from "@/components/Features/index";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Page |Protect your digital assets with our advanced cybersecurity services.",
  description: "Our focus is on delivering exceptional solutions in cybersecurity, AI and robotics, and microchip technology.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Service Page"
        description="Protect your digital assets with our advanced cybersecurity services."
      />
      <Services />
    </>    
  );
};

export default AboutPage;

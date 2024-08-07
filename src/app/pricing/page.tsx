import Pricing from "@/components/Pricing/index";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page | At CodeSynergy, we offer flexible pricing plans tailored to meet different needs and budgets.",
  description: "Choose the plan that best fits your requirements and enjoy comprehensive solutions backed by cutting-edge technology.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pricing Page"
        description="we offer flexible pricing plans tailored to meet different needs and budgets. Choose the plan that best fits your requirements and enjoy comprehensive solutions backed by cutting-edge technology."
      />
      <Pricing />
    </>    
  );
};

export default AboutPage;

import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | We’re Here to Help!",
  description: "Whether you have questions, need support, or want to discuss how CodeSynergy can assist you, we’d love to hear from you.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Whether you have questions, need support, or want to discuss how CodeSynergy can assist you, we’d love to hear from you."
      />

      <Contact />
    </>
  );
};

export default ContactPage;

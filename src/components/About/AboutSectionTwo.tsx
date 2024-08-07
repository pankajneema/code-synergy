import Image from "next/image";

const AboutSectionTwo = () => {
  const divStyle = {
    backgroundColor: 'rgb(1,3,40)',
  };
  return (
    <section className="py-16 md:py-20 lg:py-20" style={divStyle}>
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[700px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/gradient-ssl-illustration.png"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                   Unified Security Dashboard
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Manage all aspects of your cybersecurity from a single, intuitive dashboard. Monitor threat detection, vulnerability management, and penetration testing in one place.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Continuous Innovation and Improvement
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Commitment to regular updates and enhancements based on emerging threats, client feedback, and industry advancements.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Automated Threat and Vulnerability Reports
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Receive detailed, automated reports on threats and vulnerabilities directly to your email on a weekly and monthly basis. These reports provide insights into detected threats, vulnerabilities, remediation actions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;

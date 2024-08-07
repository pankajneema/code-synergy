import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  const divStyle = {
    backgroundColor: 'rgb(1,3,40)',
  };
  const boxstyle = {
    boxShadow: '0px 0px 15px rgba(27,39,81,255)',
  }
  
  const contactStyle = {
    border: '1px solid #4362de',
    borderRadius: '0.125rem', // Equivalent to rounded-sm
    backgroundColor: 'rgb(3,5,45)',
    padding: '44px 32px', // Default padding (py-11 and px-8)
    boxShadow: '0px 0px 15px rgba(27,39,81,255)',
    marginBottom: '48px', // Equivalent to mb-12
  
    // Dark mode specific styles
    '@media (prefers-color-scheme: dark)': {
      backgroundColor: '#ffffff', // Equivalent to dark:bg-gray-dark
    },
  
    // Responsive styles
    '@media (min-width: 640px)': {
      padding: '55px', // Equivalent to sm:p-[55px]
    },
    '@media (min-width: 1024px)': {
      marginBottom: '20px', // Equivalent to lg:mb-5
      paddingLeft: '32px', // Equivalent to lg:px-8
      paddingRight: '32px', // Equivalent to lg:px-8
    },
    '@media (min-width: 1280px)': {
      padding: '55px', // Equivalent to xl:p-[55px]
    },
  };
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28" style={divStyle}>
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              data-wow-delay=".15s" 
              style={contactStyle}
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
               Reach Out to Us
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
              Have a question or need assistance? We’re here to help — let’s talk.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-m font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        style={boxstyle}
                        className="border-stroke w-full rounded-sm border bg-[#010428] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#010428] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        style={boxstyle}
                        className="border-stroke w-full rounded-sm border bg-[#010428] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#010428] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        style={boxstyle}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#010428] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#010428] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

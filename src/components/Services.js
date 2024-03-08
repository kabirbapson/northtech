import React from "react";
import img from "../images/web.svg";
import img2 from "../images/app.svg";
import img3 from "../images/hosting.svg";
import img4 from "../images/consultation.svg";

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            services
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            We are deeply committed to the growth and success of our clients.
          </h2>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img}
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  Consulting Services:
                </h2>
                <p className="text-md font-medium">
                  Our experienced consultants offer strategic guidance in
                  technology adoption, digital transformation, web and mobile
                  app development, software development, UX/UI designs,
                  entrepreneurship, and business process optimization. We
                  collaborate closely with clients to create customized
                  solutions that deliver tangible results.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img2}
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  Software Training:
                </h2>
                <p className="text-md font-medium">
                  We provide comprehensive training programs to equip
                  individuals and teams with the skills needed to leverage the
                  latest technologies effectively. Our training sessions are
                  tailored to specific software platforms and led by industry
                  experts.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img3}
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  Digital Marketing:
                </h2>
                <p className="text-md font-medium">
                  NORTHteck offers advanced marketing tech software solutions to
                  streamline marketing efforts, automate processes, and gain
                  insights into customer behavior. Our software enhances
                  marketing campaigns, boosts ROI, and drives sustainable
                  growth.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img4}
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  Database Business Intelligence:
                </h2>
                <p className="text-md font-medium">
                  We specialize in developing robust database solutions that
                  enable businesses to manage and analyze large amounts of data
                  efficiently. Our services help organizations make data-driven
                  decisions, spot trends, and gain a competitive edge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
          <div
            className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
            data-aos="zoom-out"
          >
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path>
                  <path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path>
                </svg>
              </div>
              <h3
                className="text-3xl  text-blue-900 
                            font-bold"
              >
                <span className="font-black">Graphics Design:</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  NORTHteck provides creative graphic design services to enhance
                  brand visuals and communication.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
                </svg>
              </div>
              <h3 className="text-3xl  text-blue-900 font-bold">
                {" "}
                <span className="font-black">Social Media Management:</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  We offer social media management services to help businesses
                  engage with their audience effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
          <div
            className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
            data-aos="zoom-out"
          >
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4">
                <svg
                  fill="#0000f0"
                  height="72"
                  width="72"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 296.934 296.934"
                >
                  <path d="M294.737,209.65l-39.61-39.611l37.811-75.622c4.003-8.005,4.076-16.19,0.202-22.459c-3.874-6.268-11.228-9.862-20.177-9.862 H220.1c-13.01-27.539-41.045-46.646-73.471-46.646c-32.421,0-60.454,19.107-73.464,46.646h-31.61V17.013c0-4.143-3.357-7.5-7.5-7.5 H7.5c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h19.055v221.924c0,4.143,3.357,7.5,7.5,7.5h9.612 c-1.838,3.271-2.894,7.056-2.894,11.089c0,12.349,9.852,22.396,21.961,22.396c12.11,0,21.963-10.047,21.963-22.396 c0-4.033-1.057-7.817-2.894-11.089h76.465c-1.837,3.271-2.893,7.056-2.893,11.089c0,12.349,9.851,22.396,21.961,22.396 c12.11,0,21.963-10.047,21.963-22.396c0-4.033-1.057-7.817-2.893-11.089h12.921c4.143,0,7.5-3.357,7.5-7.5 c0-4.143-3.357-7.5-7.5-7.5H41.555v-21.625h161.3c7.549,0,15.564-2.494,22.692-6.621l34.077,34.075 c1.406,1.406,3.314,2.196,5.303,2.196c1.989,0,3.897-0.79,5.304-2.197l24.507-24.509 C297.666,217.327,297.666,212.579,294.737,209.65z M177.337,257.63c3.839,0,6.963,3.317,6.963,7.396s-3.124,7.396-6.963,7.396 c-3.838,0-6.961-3.317-6.961-7.396S173.499,257.63,177.337,257.63z M62.734,257.63c3.839,0,6.963,3.317,6.963,7.396 s-3.124,7.396-6.963,7.396c-3.838,0-6.961-3.317-6.961-7.396S58.896,257.63,62.734,257.63z M245.589,155.573h-4.927l-21.781-21.782 c1.661-3.222,3.113-6.544,4.322-9.958h38.255L245.589,155.573z M272.963,77.095c3.634,0,6.338,1.002,7.417,2.749 c1.08,1.746,0.767,4.613-0.858,7.863l-10.563,21.126H226.94c0.597-3.994,0.903-8.06,0.903-12.173c0-6.745-0.841-13.295-2.398-19.565 H272.963z M146.631,30.448c36.51,0.001,66.213,29.703,66.213,66.213c0.001,17.685-6.886,34.312-19.393,46.818 c-12.507,12.506-29.135,19.393-46.82,19.393c-36.509,0-66.211-29.703-66.211-66.212C80.423,60.152,110.124,30.448,146.631,30.448z M41.555,77.095h26.264c-1.557,6.271-2.398,12.82-2.398,19.565c0,4.137,0.315,8.2,0.915,12.173h-24.78V77.095z M79.136,202.312 H41.555v-31.738h37.581V202.312z M41.555,155.573v-31.74h28.557c2.272,6.381,5.313,12.398,9.024,17.934v13.807H41.555z M94.136,202.312v-31.738h18.91c5.885,2.686,12.141,4.686,18.672,5.903v25.835H94.136z M184.3,202.312h-37.582v-24.44 c11.797-0.013,23.2-2.539,33.621-7.298h3.961V202.312z M202.854,202.312H199.3v-17.866l15.105,15.104 C210.541,201.285,206.522,202.312,202.854,202.312z M264.927,228.856l-68.253-68.249c2.566-2.016,5.04-4.178,7.384-6.52 c2.343-2.343,4.505-4.817,6.52-7.383l68.249,68.25L264.927,228.856z"></path>
                </svg>
              </div>
              <h3 className="text-3xl  text-blue-900 font-bold">
                {" "}
                <span className="font-black">
                  Startups Funding Research and Marketing:{" "}
                </span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  We assist startups in sourcing funding opportunities,
                  conducting market research, and developing marketing
                  strategies to thrive in a competitive landscape.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  At NORTHteck.io, we are passionate about empowering businesses
                  with the right technology and expertise to succeed in today's
                  fast-paced world. We are committed to delivering exceptional
                  value and fostering long-term partnerships with our clients.
                  Join us on this exciting journey as we shape the future of
                  tech solutions together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

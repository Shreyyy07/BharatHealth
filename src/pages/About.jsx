import Header from "../components/Header"
const About = () => {
  return (
    <div>
      <Header/>
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Integrate Our Solution Into Your Workflow in Just 4 Easy Steps
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto mt-10">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

        {/* Steps */}
        <div className="space-y-12">
          {[
            {
              step: "Step 1",
              title: "Fill Up the Basic Details",
              desc: "Get a personalized walk-through of BharatHealth-e’s capabilities, tailored to your needs.",
            },
            {
              step: "Step 2",
              title: "Upload Personalized Reports Filled by Doctor's",
              desc: "Receive assistence from doctors based on your problem.",
            },
            {
              step: "Step 3",
              title: "Provide the Reports to Pharmacist",
              desc: "Pharma team will help with your Reports.",
            },
            {
              step: "Step 4",
              title: "Enjoy your Digitalized Experience ",
              desc: "You’re all set to fit in the BharatHealth Digital World.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-between ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Step Content */}
              <div className="w-5/12">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.step}
                </h3>
                <h4 className="text-md font-semibold text-gray-700 mt-1">
                  {item.title}
                </h4>
                <p className="text-gray-500 mt-2">{item.desc}</p>
              </div>

              {/* Step Indicator */}
              <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center shadow-md absolute left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-4 -400 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;

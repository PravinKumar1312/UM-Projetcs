export default function Skills() {
  const config = {
    // Skills Section
    line1: "Programming Languages: JAVA, Python, Kotlin",
    line2: "Developing: Front-End, Application-Development, UI & UX ",
    line3: "Frameworks: JavaScript, React ",
    line4: "Tools / Platforms: Git, Git-Hub, VS code, Figma",
    line5: "Languages: Tamil, English, Kannada, Hindi ",

    // Education Section
    line6: "VIT Bhopal University",
    line10: "Sehore, Madhya Pradesh",
    line7: "CSE (Education Technology) B-tech",
    line8: "June 2022 - Present",
    line9: "CGPA: 8.27",
  };

  return (
    <section className="flex flex-col md:flex-row bg-color-3 px-5" id="skills">
      <div className="md:w-1/2 flex justify-center py-10">
        <div className="flex flex-col text-amber-700 justify-center">
          <h1 className="text-4xl border-b-4 mb-4 font-bold border-[#e9edc9] font-main-font">
            Skills
          </h1>
          <p className="pb-5">{config.line1}</p>
          <p className="pb-5">{config.line2}</p>
          <p className="pb-5">{config.line3}</p>
          <p className="pb-5">{config.line4}</p>
          <p className="">{config.line5}</p>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center py-10">
        <div className="flex flex-col text-amber-700 justify-center">
          <h1 className="text-4xl border-b-4 mb-4 font-bold border-[#e9edc9] font-main-font">
            Education
          </h1>
          <p className="pb-5">{config.line6}</p>
          <p className="pb-5">{config.line10}</p>
          <p className="pb-5">{config.line7}</p>
          <p className="pb-5">{config.line8}</p>
          <p className="">{config.line9}</p>
        </div>
      </div>
    </section>
  );
}

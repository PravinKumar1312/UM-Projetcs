import AboutImg from "../assets/about.png";

export default function About() {
  const config = {
    line1:
      "I am Pravin Kumar GS, currently pursuing a B-Tech in Computer Science with a specialization in Educational Technology at VIT Bhopal University, Madhya Pradesh, India.",
    line2:
      "My passion lies in exploring advancements in both the tech and automobile fields. As an avid anime enthusiast, I often find myself captivated by the depth and complexity of side characters, whose stories and development sometimes surpass those of the main characters.",
    line3:
      "This perspective has inspired me to embody the qualities of these characters in my own life—making meaningful contributions while respecting the boundaries of others.",
  };

  return (
    <section className="flex flex-col md:flex-row bg-color-3 px-5" id="about">
      <div className="md:w-1/2 py-5">
        <img src={AboutImg} />
      </div>

      <div className="md:w-1/2 flex justify-center py-5">
        <div className="flex flex-col text-amber-700 justify-center">
          <h1 className="text-4xl border-b-4 mb-4 font-bold border-[#e9edc9] font-main-font">
            About Me..!
          </h1>
          <p className="pb-5">{config.line1}</p>
          <p className="pb-5">{config.line2}</p>
          <p className="">{config.line3}</p>
        </div>
      </div>
    </section>
  );
}

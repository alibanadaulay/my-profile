"use client";

export function ProfileDetail() {
  return (
    <div className="flex flex-col md:flex-row mt-6">
      <div className="md:w-3/5 justify-center flex-col flex items-center mx-10  mt-2 pb-10 md:h-full md:px-10 lg:px-20 md:pt-4">
        <h2 className="text-4xl text-green-600 font-bold items-center pt-8">
          Who am I?
        </h2>
        <h3 className="text-5xl font-bold text-white pt-2">
          I am Ali Bana, an Android and Fullstack Developer
        </h3>
        <p className="mt-6 text-base text-white">
          Experienced Android Developer with over 6 years in mobile app
          development, including 2 years as a Tech Lead. Known for driving
          innovation, guiding teams through complex projects, and delivering
          high-quality solutions that meet business objectives. Proficient in
          system design and microservices architecture, with a passion for
          designing scalable, efficient, and robust solutions.
        </p>
        <div className="w-full h-[2px] bg-white rounded-sm mt-4"></div>
        <button
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1vMuEaJ_c5JRJ_EwWc7lOsUVv9hoF8W-9/view?usp=sharing",
              "_blank"
            );
          }}
          className="bg-button p-2 rounded-md mt-6 text-white"
        >
          Download CV
        </button>
      </div>
      <div className="md:w-2/5 justify-center flex-col flex items-center mx-2 mt-2 pb-10 md:h-full md:px-10 lg:px-20 md:pt-4">
        <h2 className="text-4xl text-green-600 font-bold items-center pt-8">
          My Services
        </h2>
        <div className="flex pt-5">
          <SkillSet name="Android Development" />
          <div className="w-[0.5px] h-20 bg-gray-300"></div>
          <SkillSet name="Frontend Development" />
          <div className="w-[0.5px] h-20 bg-gray-300"></div>
          <SkillSet name="Backend Development" />
        </div>
        <h2 className="text-4xl text-green-600 font-bold items-center pt-8">
          Languanges
        </h2>
        <div className="flex pt-5">
          <SkillSet name="Kotlin" />
          <div className="w-[0.5px] h-14 bg-gray-300"></div>
          <SkillSet name="Java" />
          <div className="w-[0.5px] h-14 bg-gray-300"></div>
          <SkillSet name="React" />
          <div className="w-[0.5px] h-14 bg-gray-300"></div>
          <SkillSet name="Flutter" />
          <div className="w-[0.5px] h-14 bg-gray-300"></div>
          <SkillSet name="Golang" />
        </div>
      </div>
    </div>
  );
}

function SkillSet(obj: { name: string }) {
  return (
    <h2 className="text-xl font-bold text-white  rounded-lg p-2 mt-2 mx-4 text-center">
      {obj.name}
    </h2>
  );
}

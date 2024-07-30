export default function MyExperience() {
  return (
    <div className="pl-20 pr-20 pt-20 w-screen h-screen bg-green-400">
      <DetailExperience />;
    </div>
  );
}

function DetailExperience() {
  const experince = {
    title: "Tech Lead",
    employee: "Blue Bird Group",
    city: "Jakarta",
    country: "Indonesia",
    startAt: "July 2022",
    until: "Present",
    achievments: [
      "Fostered a collaborative team environment, resulting in a 20% improvement in teamproductivity and efficiency ",
      "Familiar with microservices architecture",
      "Spearheaded the development of internal mobile applications, leading to a 10% improvementin operational efficiency.",
      "Using MQTT protocol to optimize order processing, resulting in a 6% increase in order offerefficiency.",
      "Successfully implemented dynamic features, enhancing adaptability and functionality by 20%.",
      "Exemplified commitment to Clean Architecture principles, promoting code modularity, scalability, and maintainability. Contributed to a 30% improvement in long-term projectsuccess through robust software design",
      "Collaborated with the architecture team, resulting in well-architected solutions with a 95% alignment to functional requirements and architectural best practices.",
    ],
  };

  return (
    <div>
      <div className="flex items-center">
        <h3 className="text-xl font-bold">
          {experince.startAt} - {experince.until}
        </h3>
        <h1 className="text-3xl font-bold">
          {experince.title}, {experince.employee}
        </h1>
        <h3 className="text-xl font-bold ">
          {experince.city} - {experince.country}
        </h3>
      </div>
      <ul className="ml-96">
        {experince.achievments.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

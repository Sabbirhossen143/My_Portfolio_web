const Projects = () => {
  const data = [
    {
      name: "Project One",
      desc: "Modern UI project with clean design and responsive layout.",
      image: "/images/project1.png",
    },
    {
      name: "Project Two",
      desc: "Creative web app with smooth animations and UX.",
      image: "/images/project2.png",
    },
    {
      name: "Project Three",
      desc: "Mobile-first design with fast performance.",
      image: "/images/project3.png",
    },
  ];

  return (
    <section id="projects" className="bg-[#020617] py-20 text-white">
      <div className="max-w-5xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="flex flex-col gap-10">
          {data.map((project, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center 
              bg-[#0f172a] rounded-xl overflow-hidden shadow-lg border border-gray-800
              ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >

              {/* Image */}
              <img
                src={project.image}
                className="w-full md:w-1/2 h-64 object-cover"
                alt=""
              />

              {/* Text */}
              <div className="p-6 md:w-1/2">
                <h3 className="text-xl font-semibold">
                  {project.name}
                </h3>

                <p className="text-gray-400 mt-2">
                  {project.desc}
                </p>

                <button className="mt-4 border border-gray-600 px-4 py-2 rounded text-sm hover:bg-orange-500 hover:border-orange-500">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
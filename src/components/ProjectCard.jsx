const ProjectCard = ({ project }) => {
  // safety check (prevents crash)
  if (!project) return null;

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white">

      {/* Image */}
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />

      {/* Title */}
      <h3 className="text-lg font-semibold">{project.name}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-1">
        {project.desc}
      </p>

      {/* Tech */}
      <p className="text-xs text-gray-500 mt-2">
        {project.tech}
      </p>

      {/* Buttons */}
      <div className="flex gap-3 mt-4">
        <a
          href={project.live}
          target="_blank"
          className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
        >
          Live
        </a>

        <a
          href={project.github}
          target="_blank"
          className="px-3 py-1 border rounded text-sm hover:bg-gray-100"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
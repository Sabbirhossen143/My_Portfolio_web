const SkillsStrip = () => {
  const skills = ["HTML5", "CSS", "Javascript", "Node.js", "React", "Git", "Github"];

  return (
    <div className="bg-[#0f172a] border-y border-gray-800 py-4">
      <div className="max-w-6xl mx-auto flex justify-between text-gray-400 text-sm px-4">
        {skills.map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </div>
  );
};

export default SkillsStrip;
const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between">
        <h2 className="font-bold text-green-600">MyPortfolio</h2>

        <div className="flex gap-4 text-sm">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
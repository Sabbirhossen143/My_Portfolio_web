const Navbar = () => {
  return (
    <div className="fixed w-full top-0 z-50 bg-[#0f172a]/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        
        {/* Logo */}
        <h2 className="font-bold text-lg tracking-wide">
          Sabbir<span className="text-orange-500">.</span>
        </h2>

        {/* Menu */}
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-orange-400">Home</a>
          <a href="#about" className="hover:text-orange-400">About</a>
          <a href="#projects" className="hover:text-orange-400">Projects</a>
          <a href="#contact" className="hover:text-orange-400">Contact</a>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
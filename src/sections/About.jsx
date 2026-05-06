const About = () => {
  return (
    <section className="text-white py-24">
      <div className="max-w-5xl mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">About</h2>
          <p className="text-gray-400 mt-2">
            My Introduction
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md text-center">
            <h3 className="text-xl font-bold">Experience</h3>
            <p className="text-gray-400 mt-2">
              3 Years Working
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md text-center">
            <h3 className="text-xl font-bold">Completed</h3>
            <p className="text-gray-400 mt-2">
              150+ Projects
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md text-center">
            <h3 className="text-xl font-bold">Support</h3>
            <p className="text-gray-400 mt-2">
              Online 24/7
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
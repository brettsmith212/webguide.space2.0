const Hero = () => {
  return (
    <main className="m-8 flex flex-col gap-8 p-2 text-white">
      <div className="flex gap-8">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="text-4xl">
            A{" "}
            <span className="bg-gradient-to-br from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              repository
            </span>{" "}
            for the best web development resources
          </h1>
          <h3 className="text-xl text-gray-400">
            WebGuide is a simple way to have all of the best resources for web
            developers in one place. It's free, easily accessible and always
            up-to-date.
          </h3>
        </div>
        <div className="">
          <img src="hero_img.svg" className="" />
        </div>
      </div>
      <div className="flex">
        <button className="transform rounded-lg bg-cyan-600 px-6 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-300 focus:ring-opacity-80">
          The Guide
        </button>
      </div>
    </main>
  );
};

export default Hero;

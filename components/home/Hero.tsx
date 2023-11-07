// import next modules
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero px-5 py-24 sm:py-32 sm:px-10 md:px-16 lg:px-24 lg:py-44">
      <div className="space-y-5 sm:space-y-7 md:space-y-10">
        <p className="font-extrabold text-4xl text-white sm:text-5xl lg:text-6xl">
          Your home&apos;s helping hand
        </p>
        <p className="text-white text-lg sm:text-xl md:text-2xl">
          Discover, connect, hire. Simplify your search for skilled workers.
        </p>
        <button
          className="bg-primary px-7 py-2 rounded-full text-lg font-bold text-white 
                             hover:shadow-xl sm:text-xl md:text-2xl"
        >
          <Link href="/hire">Hire Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;

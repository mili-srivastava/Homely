//import icons
import { AiFillCheckCircle } from "react-icons/ai";

const About = () => {
  return (
    <div className="lg:flex gap-10 py-10">
      <div className="md:px-28 lg:w-1/2 px-5">
        <div className="relative top-0 left-0  ">
          <img
            src="./images/about-img.jpg"
            alt="about"
            className="relative h-full top-0 left-0  object-cover w-96 rounded-lg  md:w-full  "
          />
          
          <img
            src="./images/about-img.jpg"
            alt="about"
            className="w-96 h-full absolute top-14 left-14  border-4 border-secondary rounded-lg md:w-full"
          />
        </div>
      </div>
      <div className="px-5 mt-24 lg:mt-0 lg:w-1/2">
        <p className="text-primary py-5 text-center text-4xl font-bold">
          Connect with Passionate Workers
        </p>
        <p className="text-justify">
          Discover skilled professionals on our web app who are passionate about
          their work. Experience exceptional services provided by dedicated
          workers committed to delivering outstanding results. Simplify your
          hiring needs and find reliable professionals who take pride in their
          expertise across various industries.
        </p>

        <div className="py-8">
          <div className="flex gap-3 items-center">
            <AiFillCheckCircle className="text-3xl text-primary" />
            <p>Reliable Task Coordination</p>
          </div>
          <div className="flex gap-3 items-center py-3">
            <AiFillCheckCircle className="text-3xl text-primary" />
            <p>100% Customer Satisfaction</p>
          </div>
          <div className="flex gap-3 items-center">
            <AiFillCheckCircle className="text-3xl text-primary" />
            <p>Affordable Prices</p>
          </div>
        </div>
        <button className="bg-primary px-3 py-2 text-white font-bold rounded-full">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default About;

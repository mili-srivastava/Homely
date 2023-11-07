//import icons
import { IoIosGitNetwork } from "react-icons/io";
import { FaHireAHelper } from "react-icons/fa";

const HireWorker = () => {
  return (
    <div className="px-10 lg:flex lg:gap-20 w-full">
      <div className="lg:w-[50%]">
        <img
          src="./images/HireWorker.jpg"
          alt="HireWorker"
          className="rounded-lg"
        />
      </div>
      <div className="lg:w-[50%]">
        <p className="text-primary font-bold  text-4xl py-5">
          Unlock the Power of a Skilled Workforce
        </p>
        <p className="text-justify">
          Homely connects you with skilled workers ready to make an impact.
          Streamline your hiring process, access a diverse pool of
          professionals, and find the perfect fit for your business needs.
          Simplify your workforce recruitment with our intuitive platform.
        </p>

        <div className="lg:flex gap-10 my-16 items-center">
          <div>
            <IoIosGitNetwork className="text-5xl text-secondary " />
            <p className="text-xl font-bold">Extensive Reach</p>
            <p>Extensive Reach, Effortless Hiring Journey</p>
          </div>
          <div className="py-10">
            <FaHireAHelper className="text-4xl text-secondary" />
            <p className="text-xl font-bold pt-1">Streamlined Hiring</p>
            <p>Vast Pool, Streamlined Recruitment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireWorker;

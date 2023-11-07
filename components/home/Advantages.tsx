//import props
import Advantage from "@/props/Advantage";

//import icons
import { GiRoundStar } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
import {
  MdOutlineSentimentVerySatisfied,
  MdVerifiedUser,
} from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BsHandThumbsUpFill } from "react-icons/bs";

const Advantages = () => {
  return (
    <div className="grid grid-cols-1 mx-10 w-fit gap-10 my-24 sm:grid-cols-2 md:mx-24 lg:grid-cols-3">
      <Advantage
        Icon={GiRoundStar}
        title="Extensive Talent Pool"
        description="Access diverse professionals with a wide range of skills and expertise for your all household needs."
      />

      <Advantage
        Icon={RiSecurePaymentFill}
        title="Convenient Payment Options"
        description=" Choose flexible online and offline payment methods for easy transactions."
      />

      <Advantage
        Icon={MdOutlineSentimentVerySatisfied}
        title="Satisfaction Guarantee"
        description="Prioritizing your satisfaction, we provide dedicated support to address any concerns you may have."
      />

      <Advantage
        Icon={MdVerifiedUser}
        title="Reliable and Verified Workers"
        description="Trust our professionals, by user feedback, for reliable and high-quality service."
      />

      <Advantage
        Icon={AiOutlineFieldTime}
        title="Time and Cost Efficiency"
        description="Save time and money by streamlining your hiring process and reducing complexities."
      />
      <Advantage
        Icon={BsHandThumbsUpFill}
        title="Quality Assurance"
        description="Homely ensures quality assurance by  allowing users to provide ratings and feedback."
      />
    </div>
  );
};

export default Advantages;

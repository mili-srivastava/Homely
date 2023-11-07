//import icons
import { HiUserGroup } from "react-icons/hi";
import {BsHouseCheck  } from "react-icons/bs";
import { IoIosNotificationsOutline  } from "react-icons/io";
import {RiSecurePaymentFill } from "react-icons/ri";

const HowWeWork = () => {
  return (
    <div>
      <p className="text-4xl font-bold text-center py-5 text-primary">
        How We Work
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2  items-center">
        <div className="flex flex-col items-center px-28">
          <HiUserGroup className="text-6xl text-secondary" />
          <p className="py-5  font-bold text-xl">
            Worker Selection
          </p>
          <p className="text-center text-gray-500">
            Browse through profiles to find the right fit for their
            requirements.
          </p>
        </div>

        <div className="flex flex-col items-center py-16 px-16">
          <BsHouseCheck className="text-6xl text-secondary" />
          <p className="py-5  font-bold text-xl">
            Work Completion
          </p>
          <p className="text-center text-gray-500">
            After Selection and Hiring worker will visit your home and fix all
            the issues.
          </p>
        </div>

        <div className="flex flex-col items-center px-16">
          <IoIosNotificationsOutline className="text-6xl text-secondary" />
          <p className="py-5 font-bold text-xl">
            Clear Notifications
          </p>
          <p className="text-center text-gray-500">
            Users receive timely notifications confirming the hiring and worker
            availability.
          </p>
        </div>

        <div className="flex flex-col items-center py-16 px-16">
          <RiSecurePaymentFill className="text-6xl text-secondary" />
          <p className="py-5  font-bold text-xl">
            Convenient Payment
          </p>
          <p className="text-center text-gray-500">
          Users can securely make payments through our web app, providing a hassle-free transaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;

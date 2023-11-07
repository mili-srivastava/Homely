import Image from "next/image";

import { ServiceProps } from "@/interfaces";

const Service = ({ imgURL, name, desc }: ServiceProps) => {
  return (
    <div className="w-96 md:w-80  border-2 border-gray-100 rounded-lg">
      <div className="h-min overflow-hidden rounded-md ">
        <Image
          src={imgURL}
          alt="services_image"
          width={500}
          height={500}
          className="hover:scale-125 transition-all duration-500 cursor-pointer w-96 md:w-80 h-52 md:h-48"
        />
      </div>
      <div className=" py-5">
        <p className="pt-2 font-bold text-2xl text-primary text-center">
          {name}
        </p>
        <p className="text-center">{desc}</p>

        <button className="bg-secondary px-5 py-2 rounded-full text-white my-5 flex mx-auto">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Service;

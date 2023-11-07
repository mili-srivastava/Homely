import { AdvantageProps } from "@/interfaces";

const Advantage = ({ Icon, title, description }: AdvantageProps) => {
  return (
    <div
      className="shadow-secondary shadow flex flex-col gap-5 justify-center px-5 py-10 rounded-lg transition 
                     duration-500 ease-in-out cursor-default select-none h-56 hover:shadow-lg 
                   hover:shadow-secondary"
    >
      <Icon className="text-4xl text-secondary" />
      <p className="text-xl font-bold">{title}</p>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Advantage;

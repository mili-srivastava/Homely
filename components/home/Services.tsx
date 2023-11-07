import Link from "next/link";

import { Service } from "@/props";

const child = { width: `30em`, height: `100%` };

const Services = () => {
  return (
    <div className="py-20">
      <p className="text-center text-lg text-secondary p-3"> What We Offer</p>
      <p className="text-center font-bold text-4xl">Our Services</p>

      <div className="py-10 place-items-center grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <Service
          imgURL="/images/home-Appliance.jpg"
          name="Appliance Repair"
          desc="Technicians to fix and service your household appliances."
        />
        <Service
          imgURL="/images/carpentry.jpg"
          name="Carpentry Services"
          desc="Skilled carpenters for custom furniture, repairs, and woodworking projects."
        />
        <Service
          imgURL="/images/home-cleaning.jpg"
          name="House Cleaning"
          desc="Reliable maids and cleaners for a clean and organized home."
        />
        <Service
          imgURL="/images/electric.jpg"
          name="Electrical Services"
          desc="Expert electricians for installations, repairs, and maintenance."
        />
        <Service
          imgURL="/images/painter.jpg"
          name="Painting Services"
          desc="Professional painters to refresh and enhance your living space."
        />
        <Service
          imgURL="/images/childcare.jpg"
          name="Childcare Services"
          desc="Qualified caregivers to nurture and care for your children."
        />
      </div>

      <Link href="/services">
        <button className="bg-primary text-lg px-7 py-3 rounded-full text-white flex mx-auto mb-10">
          Explore more services
        </button>
      </Link>
    </div>
  );
};

export default Services;

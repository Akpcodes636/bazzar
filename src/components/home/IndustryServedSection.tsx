import Link from "next/link";
import React from "react";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { ImLab } from "react-icons/im";
import { FaPills } from "react-icons/fa6";
import { FaBus } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa6";
import { GiMicroscope } from "react-icons/gi";
import { LiaWineBottleSolid } from "react-icons/lia";
import { MdLocalShipping } from "react-icons/md";
import { FaPlane } from "react-icons/fa";

interface Industry {
  icon: React.ElementType;
  text: string;
}

const Industry: React.FC<Industry> = ({ icon: Icon, text }) => {
  return (
    <Link
      href=""
      className="border flex py-4 px-2 flex-col items-center justify-center w-full"
    >
      <Icon className="text-[100px] text-primary hover:text-primary-hover" />
      <div className="text-center">{text}</div>
    </Link>
  );
};

const IndustryServedSection = () => {
  return (
    <section>
      <div className="container">
        <div className="bg-red300 rounded-lg overflow-hidden border-l border-r border-b">
          <div className="bg-black-base-bg px-4 py-3 text-center text-lg">
            INDUSTRIES SERVED
          </div>
          <div className="min-h-52 grid max-[350px]:grid-cols-1 max-sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-9">
            <Industry icon={GiForkKnifeSpoon} text="Food & Beverage" />
            <Industry icon={ImLab} text="Chemical & Petrochemical" />
            <Industry icon={FaPills} text="Medical &amp; Pharmaceutical" />
            <Industry icon={FaBus} text="Transportation &amp; Logistics" />
            <Industry icon={FaIndustry} text="Manufacturing" />
            <Industry icon={GiMicroscope } text="Laboratory &amp; R&amp;D" />
            <Industry icon={LiaWineBottleSolid} text="Plastics &amp; Polymers" />
            <Industry  icon={MdLocalShipping} text="Shipping &amp; Freight"/>
            <Industry icon={FaPlane} text="Aerospace &amp; Aviation" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryServedSection;

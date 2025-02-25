"use client";
import React, { useState } from "react";
import Logo from "../ui/Logo";
import { AlignJustify, ChevronDown } from "lucide-react";
import { useNavStore } from "@/store/NavStore";

const categories = [
  { id: 1, name: "Products" },
  { id: 2, name: "Services" },
  { id: 3, name: "Solutions" },
];

const MobileCategories = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-200 ${
        isOpen ? "max-h-40" : "max-h-0"
      }`}
    >
      <div className="text-black px-2 pt-2 pb-1 text-black-secondary-bg hover:bg-primary-background cursor-pointer duration-150">
        Mobile Category 1
      </div>
      <div className="text-black px-2 pt-2 pb-1 text-black-secondary-bg hover:bg-primary-background cursor-pointer duration-150">
        Mobile Category 2
      </div>
      <div className="text-black px-2 pt-2 pb-1 text-black-secondary-bg hover:bg-primary-background cursor-pointer duration-150">
        Mobile Category 3
      </div>
    </div>
  );
};

const MobileNav = () => {
  const { closeNav, isNavOpen, openNav } = useNavStore();
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const toggleCategory = (id: number) => {
    setActiveCategory(activeCategory === id ? null : id);
  };

  return (
    <nav className="sm:hidden flex justify-between items-center container fixed top-0 left-0 right-0 bg-white py-2 px-4 z-50">
      <Logo css="h-12" />
      <AlignJustify
        onClick={openNav}
        className="text-primary cursor-pointer"
        size={24}
      />

      <div
        onClick={closeNav}
        className={`fixed h-screen bg-[#00000060] backdrop-blur top-0 left-0 right-0 bottom-0 duration-150 ${
          isNavOpen ? "translate-x-0" : "translate-x-[200%]"
        }`}
      ></div>

      <div
        className={`fixed flex flex-col items-start h-screen bg-white top-0 left-0 w-2/3 duration-150 pt-10 ${
          isNavOpen ? "translate-x-0" : "-translate-x-[200%]"
        }`}
      >
        <Logo css="h-12 px-2" />
        <div className="mt-10 w-full flex flex-col gap-[1px] text-white font-semibold">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col">
              <div
                className="flex items-center justify-between py-2 px-2 bg-primary w-full cursor-pointer"
                onClick={() => toggleCategory(category.id)}
              >
                <span>{category.name}</span>
                <ChevronDown
                  size={22}
                  className={`transition-transform duration-200 ${
                    activeCategory === category.id ? "rotate-180" : ""
                  }`}
                />
              </div>
              <MobileCategories isOpen={activeCategory === category.id} />
            </div>
          ))}
          <div className="flex items-center justify-between bg-primary py-2 w-full px-2 cursor-pointer">
            <span>Search</span>
            <ChevronDown size={22} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;

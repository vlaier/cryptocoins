import { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { FaHome, FaNewspaper } from "react-icons/fa";
import Link from "next/link";
export default function Navbar() {
  const [isFolded, setIsFolded] = useState(false);
  const NavbarItem = ({ text, link, icon }) => {
    return (
      <div className="border-2 w-20 h-20 p-2 text-gray-500 border-hover rounded-3xl lg:rounded-xl flex justify-center items-center cursor-pointer lg:border-none lg:w-full lg:px-1 hover:text-white hover:bg-hover  hover:border-none ">
        <Link href={link}>
          <span className=" relative   flex flex-col justify-center items-center lg:flex-row lg:justify-start lg:pl-5 lg:gap-5 lg:items-center lg:w-full">
            <div className="text-center text-3xl">{icon}</div>
            <div className="lg:text-xl lg:font-bold">{text}</div>
          </span>
        </Link>
      </div>
    );
  };
  const toggleIsFolded = () => {
    setIsFolded(!isFolded);
  };
  return (
    <nav className="w-screen py-1 bg-secondary shadow-inner  shadow-hover h-24  flex items-center lg:h-screen lg:shadow-sm px-2 lg:w-72">
      <div className="hidden">
        <h1 className=" ">Fizzy Coin</h1>
        <AiOutlineMenuFold className=" " onClick={toggleIsFolded} />
      </div>

      <div className="flex w-full justify-center shadow-sm lg:gap-10 lg:flex-col lg:items-center lg:px-2">
        <NavbarItem link={"/"} text={"Home"} icon={<FaHome />} />
        <NavbarItem link={"/news"} text={"News"} icon={<FaNewspaper />} />
        <NavbarItem link={"/news"} text={"News"} icon={<FaNewspaper />} />
      </div>
    </nav>
  );
}

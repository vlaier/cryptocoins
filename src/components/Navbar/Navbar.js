import { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
export default function Navbar() {
  const [isFolded, setIsFolded] = useState(false);
  const NavbarItem = ({ children }) => {
    return (
      <div className="py-3 rounded-md text-lg text-gray-500 hover:text-white hover:bg-hover text-center border-solid border-2  border-gray-700 w-8/12">
        {children}
      </div>
    );
  };
  const toggleIsFolded = () => {
    setIsFolded(!isFolded);
  };
  return !isFolded ? (
    <nav className=" bg-secondary h-screen basis-60 flex flex-col gap-20 justify-start">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-white text-2xl ">Fizzy Coin</h1>
        <AiOutlineMenuFold
          className="text-white text-2xl cursor-pointer"
          onClick={toggleIsFolded}
        />
      </div>

      <div className=" flex flex-col items-center justify-between w-full gap-20">
        <NavbarItem>Profil</NavbarItem>
        <NavbarItem>Profil</NavbarItem>
        <NavbarItem>Profil</NavbarItem>
      </div>
    </nav>
  ) : (
    <nav className=" bg-secondary h-screen w-10 flex flex-col justify-start bg-opacity-30">
      <div className="flex items-center justify-center w-full">
        <AiOutlineMenuUnfold
          className="text-white text-2xl cursor-pointer"
          onClick={toggleIsFolded}
        />
      </div>
    </nav>
  );
}

import { MenuIcon } from "lucide-react";
import React from "react";
import Button from "./Button";

const MenuButton = ({ onClick, className }) => {
  return (
    <Button
      variant="secondary"
      size="sm"
      className={`gap-x-0 ${className}`}
      onClick={onClick}
    >
      <span className="hidden md:block font-quicksand font-semibold">MENU</span>
      <div className="w-4 h-4 md:w-8 md:h-8 rounded-full flex items-center justify-center bg-transparent">
        <MenuIcon className="w-4 h-4" />
      </div>
    </Button>
  );
};

export default MenuButton;

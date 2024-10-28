import { ArrowLeft, Heart } from "lucide-react";
import React from "react";
import CustomImage from "./CustomImage";
import { Button } from "./button";

export default function HeaderComponent() {
  return (
    <nav className=" flex w-full py-4 flex-row justify-center bg-white fixed">
      <div className=" w-full flex px-5 md:container items-center flex-row justify-between ">
        <Button size={"icon"} variant={"ghost"}>
          <CustomImage alt="back icon" src={"/arrowLeft.svg"} />
        </Button>
        <span className="text-[#303237] dark:text-foreground text-lg font-bold">
          Event Page
        </span>
        <Button size={"icon"} variant={"ghost"}>
          <CustomImage alt="back icon" src={"/HeartIcon.svg"} />
        </Button>
      </div>
    </nav>
  );
}

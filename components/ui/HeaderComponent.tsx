"use client";
import { ArrowLeft, Bell, Heart } from "lucide-react";
import React from "react";
import CustomImage from "./CustomImage";
import { Button } from "./button";
import { usePathname, useRouter } from "next/navigation";
import { Badge } from "./badge";

export default function HeaderComponent() {
  const route = useRouter();
  const pathName = usePathname().split("/")[1];
  const returnIcon = () => {
    switch (pathName) {
      case "payment":
        return (
          <div className=" relative ">
            <Bell className=" w-5 h-5 text-[#303237]" />
            <div className=" rounded-full text-xs  w-4 h-4 items-center text-white dark:text-white justify-center flex left-2  bg-red-500 absolute top-[-14px] mt-1">
              9
            </div>
          </div>
        );
      case "tickets":
        return (
          <div className=" relative ">
            <Bell className=" w-5 h-5 text-[#303237]" />
            <div className=" rounded-full text-xs  w-4 h-4 items-center text-white dark:text-white justify-center flex left-2  bg-red-500 absolute top-[-14px] mt-1">
              9
            </div>
          </div>
        );
      case "event":
        return <CustomImage alt="back icon" src={"/HeartIcon.svg"} />;

      default:
        break;
    }
  };
  return (
    <nav className=" flex w-full py-4 flex-row justify-center fixed z-10 bg-white">
      <div className=" w-full flex px-5 md:container items-center flex-row justify-between ">
        <Button onClick={() => route.back()} size={"icon"} variant={"ghost"}>
          <CustomImage alt="back icon" src={"/arrowLeft.svg"} />
        </Button>
        <span className="text-[#303237] dark:text-foreground text-lg font-bold capitalize">
          {pathName} Page
        </span>
        {returnIcon()}
      </div>
    </nav>
  );
}

import React, { Fragment } from "react";
import CustomImage from "@/components/ui/CustomImage";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Share2 } from "lucide-react";
import Link from "next/link";
import BottomTabComponent from "@/components/ui/bottom-tab";

export default function PaymentPageComponent() {
  return (
    <Fragment>
      <div className="bg-white h-screen text-white relative">
        {/* <div>
          <div
          style={{
            backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url('/Subtract.svg')`,
          }}
          className="relative block mb-2 md:hidden h-full flex-row items-center  overflow-hidden rounded-t-xl"
        />
        </div> */}
        <div className=" h-screen w-full px-3">
          <div className="mb-2 h-full w-full flex items-center overflow-hidden relative px-2 bg-no-repeat bg-contain rounded-t-xl bg-subtract md:hidden bg-center">
            {/* Content goes here */}
            <CustomImage
              src="/images/bg.png"
              alt="Event Banner"
              className="rounded-b-3xl h-[135px] w-full mb-auto mt-32"
            />
            <CustomImage
              src="/line.svg"
              alt="Event hhh"
              className=" top-0 mt-[270px] absolute w-full"
            />
            <div className=" absolute flex flex-col bottom-0 w-full h-[40%] mb-40 left-0 px-2 right-0 ">
              <div className="  flex-grow relative flex items-center flex-col">
                <span className=" text-xl font-semibold">Taboo Festival</span>
                <div className=" w-full px-2 py-2">
                  <span className=" text-xs">
                    Wednesday, 20 Nov 2019, 15:00
                  </span>
                  <div className=" flex flex-col gap-1 py-2">
                    <span className=" text-xs font-semibold">Seat</span>
                    <span className=" text-lg font-semibold">G3, G4</span>
                    <span className=" text-xs">Guest</span>
                    <span className=" text-sm font-semibold">Conea Adrian</span>
                    <span className=" text-xs">Tickets</span>
                    <span className=" text-sm font-semibold">5× Standard</span>
                  </div>
                </div>
                <div className=" mt-auto w-full flex flex-col px-2">
                  <span className=" text-sm">Actual Pay</span>
                  <span className=" text-xl font-semibold">800 Lei</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" block md:hidden">
          <BottomTabComponent />
        </div>
      </div>
    </Fragment>
  );
}

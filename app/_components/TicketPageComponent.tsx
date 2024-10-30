import React, { Fragment } from "react";
import CustomImage from "@/components/ui/CustomImage";
import Link from "next/link";
import BottomTabComponent from "@/components/ui/bottom-tab";
import { Button } from "@/components/ui/button";

export default function TicketPageComponent() {
  return (
    <Fragment>
      <div className="bg-white h-screen text-white relative">
        <div className=" relative h-screen w-full px-5">
          <div className="  pb-6 bg bg-[#303237] rounded-b-md mt-20 relative">
            <CustomImage
              src="/images/bg.png"
              alt="Event Banner"
              className="rounded-b-3xl h-44 w-full"
            />
            <div className="w-full flex row items-center justify-between">
              <div className=" h-8 w-8 bg-white rounded-r-full" />
              <CustomImage
                src="/line.svg"
                alt="Event hhh"
                className=" w-[90%]"
              />
              <div className=" h-8 w-8 bg-white rounded-l-full" />
            </div>
            <div className="flex flex-col w-full h-fit pb-3 px-2 ">
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
                <div className=" mt-auto w-full flex flex-col pt-32 px-2">
                  <span className=" text-sm">Actual Pay</span>
                  <span className=" text-xl font-semibold">800 Lei</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full flex justify-center py-4">
            <Link href={"/tickets/qrcode"}>
              <Button className=" bg-[#303237] hover:bg-[#303237]">
                Vezi QR-cod
              </Button>
            </Link>
          </div>
        </div>

        <div className=" block md:hidden">
          <BottomTabComponent />
        </div>
      </div>
    </Fragment>
  );
}

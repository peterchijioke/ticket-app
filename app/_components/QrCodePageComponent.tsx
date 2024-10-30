import React, { Fragment } from "react";
import CustomImage from "@/components/ui/CustomImage";
import Link from "next/link";
import BottomTabComponent from "@/components/ui/bottom-tab";
import { Button } from "@/components/ui/button";

export default function QrCodePageComponent() {
  return (
    <Fragment>
      <div className="bg-white h-screen text-white relative">
        <div className=" relative h-screen w-full px-5">
          <div className="  pb-6 bg bg-[#303237] block md:hidden rounded-md mt-20 relative">
            {/* IMAGE  */}

            <div className=" w-full px-5 flex justify-center py-5 ">
              <div className=" h-52 aspect-square w-[90%] bg-white overflow-hidden p-1 rounded-lg">
                <CustomImage
                  src="/images/code.png"
                  alt="Event hhh"
                  className=" w-full h-full"
                />
              </div>
            </div>
            <div className=" w-full flex justify-center px-2">
              <span className=" text-[12px] text-center">
                Show this code to the gatekeeper at the cinema
              </span>
            </div>
            <div className="w-full flex row items-center justify-between">
              <div className=" h-8 w-8 bg-white rounded-r-full" />
              <CustomImage
                src="/line.svg"
                alt="Event hhh"
                className=" w-[90%]"
              />
              <div className=" h-8 w-8 bg-white rounded-l-full" />
            </div>

            <div className=" w-full flex justify-center">
              <span className=" text-xl text-center font-semibold">
                Taboo Festival
              </span>
            </div>
            <div className=" w-full flex flex-col justify-center px-3 gap-5 pt-8">
              <span className=" text-sm text-center">
                XXI Ambarukmo Plaza, Studio 1
              </span>
              <div className=" flex justify-between items-center px-5">
                <div className=" flex-col flex">
                  <span className=" text-sm">Date</span>
                  <span className=" text-sm">20 Nov</span>
                </div>
                <div className=" flex-col flex">
                  <span className=" text-sm">Hour</span>
                  <span className=" text-sm">15:00</span>
                </div>
                <div className=" flex-col flex">
                  <span className=" text-sm">Seats</span>
                  <span className=" text-sm">G10, G11</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full flex justify-center md:hidden gap-2 py-4 flex-col">
            <Button size={"sm"} className=" bg-[#303237] hover:bg-[#303237]">
              <CustomImage
                src="/share.svg"
                alt="share hhh"
                className=" w-3.5 h-3.5"
              />{" "}
              Send
            </Button>
            <Button size={"sm"} className=" bg-[#303237] hover:bg-[#303237]">
              <CustomImage
                src="/wallet.svg"
                alt="share hhh"
                className=" w-3.5 h-3.5"
              />{" "}
              Add to Wallet
            </Button>
          </div>
        </div>

        <div className=" block md:hidden">
          <BottomTabComponent />
        </div>
      </div>
    </Fragment>
  );
}

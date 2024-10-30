import React, { Fragment } from "react";
import CustomImage from "@/components/ui/CustomImage";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Apple, MapPin, Minus, Plus, Share2 } from "lucide-react";
import Link from "next/link";
import BottomTabComponent from "@/components/ui/bottom-tab";

export default function PaymentPageComponent() {
  return (
    <Fragment>
      <div className="bg-white h-screen text-white relative">
        <div className=" w-full pt-24 block md:hidden px-5">
          <div className=" flex flex-row items-center gap-2">
            <div className="w-1/2">
              <CustomImage
                src="/images/bg.png"
                alt="Event hhh"
                className=" h-full rounded-lg"
              />
            </div>
            <div className=" flex flex-col gap-1 w-full">
              <span className=" font-semibold text-sm text-black">
                RATU ILMU HITAM
              </span>
              <span className=" text-[10px] text-black flex flex-row items-center">
                <MapPin className="w-4 h-4" />
                XXI Ambarukmo Plaza, Studio 1
              </span>
              <span className=" text-xs text-[#676767] flex flex-row items-center">
                24 Oct at 18:30 CEST
              </span>
            </div>
          </div>
          <div className="w-full">
            <span className=" text-xs text-black">Tickets</span>
          </div>
          <div className="w-full flex justify-between items-center py-3">
            <span className=" text-xs text-black font-semibold">
              5× Standard
            </span>
            <span className=" text-xs text-black">$34.00</span>
          </div>
        </div>
        <div className=" h-[1px] bg-[#333333] w-full" />
        <div className="w-full flex justify-between items-center py-3 px-5">
          <span className=" text-xs text-black font-semibold">tandard</span>
          <span className=" text-xs text-black">$34.00</span>
        </div>

        <div className="w-full px-5">
          <span className=" text-xs text-[#4F55F1] font-semibold">
            Add a coucher
          </span>

          <div className="w-full flex justify-between items-center py-3">
            <span className=" text-sm text-black">Total</span>
            <span className=" text-lg text-black font-semibold ">$34.00</span>
          </div>
        </div>

        <div className=" w-full flex justify-center md:hidden gap-2 py-12 flex-col px-5">
          <Link className=" w-full" href={"/tickets"}>
            <Button
              size={"sm"}
              variant={"outline"}
              className=" w-full text-[#376FFF] hover:text-[#376FFF]"
            >
              <CustomImage
                src="/share.svg"
                alt="share hhh"
                className=" w-3.5 h-3.5"
              />{" "}
              Pay with Card
            </Button>
          </Link>
          <Button size={"sm"} className=" bg-[#303237] hover:bg-[#303237]">
            <Apple className=" w-4 h-4 text-white" />
            Pay
          </Button>
        </div>

        <div className=" block md:hidden">
          <BottomTabComponent />
        </div>
      </div>
    </Fragment>
  );
}

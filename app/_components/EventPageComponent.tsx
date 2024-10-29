import React, { Fragment } from "react";
import CustomImage from "@/components/ui/CustomImage";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Share2 } from "lucide-react";
import Link from "next/link";

export default function EventPage() {
  return (
    <Fragment>
      <div className="bg-white pt-16 h-screen text-white relative ">
        <CustomImage
          className=" w-full max-h-min md:h-[40rem]"
          src="/images/bg.png"
          alt="Event Banner"
        />
        <div className=" px-6 md:px-36 mt-5">
          <h1 className=" text-xl font-extrabold text-[#303237] dark:text-foreground">
            SATOSHI - Sport Tour 2024 Cluj-Napoca
          </h1>
        </div>
        <div className="grid px-6 md:px-36">
          <div className="   my-5 flex flex-row items-center justify-between">
            <div className=" flex flex-row items-center gap-2">
              <div className=" w-10 h-10 rounded-full overflow-hidden">
                <CustomImage
                  alt="Profile pix"
                  className=" w-full h-full"
                  src={"/images/profile.png"}
                />
              </div>
              <div className="grid">
                <span className=" text-sm font-semibold text-[#303237] dark:text-foreground">
                  Satoshi
                </span>
                <span className=" text-xs text-[#303237B2] dark:text-foreground">
                  4 789 followers
                </span>
              </div>
            </div>
            <Button
              size={"sm"}
              className=" w-fit bg-[#303237] dark:bg-foreground text-sm font-semibold"
            >
              Follow
            </Button>
          </div>
          <Separator />

          <div className=" grid space-y-3 pt-8">
            <div className="grid">
              <div className=" flex flex-row items-center gap-2">
                <Button
                  size={"icon"}
                  className=" bg-[#F7F7F7] dark:bg-foreground"
                  variant={"ghost"}
                >
                  <CustomImage
                    alt="Profile pix"
                    className=" w-5 h-5"
                    src={"/clock.svg"}
                  />
                </Button>
                <div className="grid">
                  <span className=" text-sm text-[#303237] dark:text-foreground">
                    November 24, 2024
                  </span>
                  <span className=" text-sm text-[#303237] dark:text-foreground">
                    19:00
                  </span>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className=" flex flex-row items-center gap-2">
                <Button
                  size={"icon"}
                  className=" bg-[#F7F7F7] dark:bg-foreground"
                  variant={"ghost"}
                >
                  <CustomImage
                    alt="Profile pix"
                    className=" w-5 h-5"
                    src={"/location.svg"}
                  />
                </Button>
                <div className="grid">
                  <span className=" text-sm text-[#303237] dark:text-foreground">
                    Bucharest, Romania
                  </span>
                  <span className=" text-sm text-[#303237] dark:text-foreground">
                    Quantic Pub
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative rounded-xl bg-[#757575D4] p-1 overflow-hidden pb-3  mt-8">
            <div className=" flex flex-row items-center h-10 bg-[#FFFFFF14] rounded-t-xl dark:bg-foreground px-3">
              <span className=" text-sm">Get Tickets</span>
            </div>

            <div className=" px-3 mt-5">
              <span className=" text-sm">
                Welcome! Please choose your desired ticket type:
              </span>
              {/* BROWN CARD */}

              <div className=" grid gap-2 mt-5 ">
                <div className="bg-[#303237] rounded-xl border border-white p-3 flex items-start flex-row justify-between">
                  <div className=" flex flex-col">
                    <div className=" flex flex-row items-center gap-3 flex-wrap">
                      <span className=" text-xs text-[#ffffff] font-semibold">
                        Early Bird
                      </span>
                      <div className="  bg-[#FFFFFF14] rounded-2xl py-1  px-2 text-sm">
                        4 Left
                      </div>
                    </div>
                    <span className=" ml-1 text-xs text-white font-semibold">
                      €55.00
                    </span>
                  </div>
                  {/* ===============PLUS SECTION============= */}
                  <div className=" flex-row items-center gap-3 flex flex-wrap">
                    <Button className=" bg-[#FFFFFF14] h-fit w-fit p-1 md:p-5">
                      <Plus className=" w-3.5 h-3.5 text-[#FFFFFFA3]" />
                    </Button>
                    <span className=" text-xs">1</span>
                    <Button className=" bg-[#FFFFFF14] h-fit p-1 w-fit md:p-5">
                      <Minus className=" w-3.5 h-3.5 text-[#FFFFFFA3]" />
                    </Button>
                  </div>
                </div>

                {/* ================================== */}
                <div className="bg-[#FFFFFF14] rounded-xl p-3 flex items-start flex-row justify-between">
                  <div className=" flex flex-col">
                    <div className="grid">
                      <span className=" text-xs text-[#ffffff] font-semibold">
                        Standard
                      </span>
                    </div>
                    <span className=" ml-1 text-xs text-white font-semibold">
                      €60.00
                    </span>
                  </div>
                  {/* ===============PLUS SECTION============= */}
                  <div className=" flex-row items-center gap-3 flex flex-wrap">
                    <Button className=" bg-[#FFFFFF14] h-fit w-fit p-1 md:p-5">
                      <Plus className=" w-3.5 h-3.5 text-[#FFFFFFA3]" />
                    </Button>
                  </div>
                </div>
                {/* ======================================== */}

                <div className="bg-[#FFFFFF14] rounded-xl p-3 flex items-start flex-row justify-between">
                  <div className=" flex flex-col">
                    <div className=" flex flex-row items-center gap-3 flex-wrap">
                      <span className=" text-xs text-[#ffffff] font-semibold">
                        Bizum
                      </span>
                      <div className="  bg-[#D6971222] text-[#F2CA77] rounded-2xl py-1  px-1 text-xs">
                        Require Approval
                      </div>
                    </div>
                    <span className=" ml-1 text-xs text-white font-semibold">
                      Free
                    </span>
                    <span className=" ml-1 text-xs text-[#FFFFFFC9]">
                      Bizum payment.
                    </span>
                  </div>
                  {/* ===============PLUS SECTION============= */}
                  <div className=" flex-row items-center gap-3 flex flex-wrap">
                    <Button className=" bg-[#FFFFFF14] h-fit w-fit p-1 md:p-5">
                      <Plus className=" w-3.5 h-3.5 text-[#FFFFFFA3]" />
                    </Button>
                  </div>
                </div>
                <div className="w-full justify-center flex flex-row">
                  <Button className=" bg-white w-full md:w-1/2 hover:bg-inherit  self-center dark:bg-foreground text-black dark:text-foreground font-semibold">
                    Get Ticket
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className=" my-5">
            <div className=" flex flex-row items-center gap-2">
              <div className=" w-10 h-10 rounded-full overflow-hidden">
                <CustomImage
                  alt="Profile pix"
                  className=" w-full h-full"
                  src={"/images/profile.png"}
                />
              </div>
              <div className="grid">
                <span className=" text-sm font-semibold text-[#303237] dark:text-foreground">
                  1 joined
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-4">
              <span className=" text-sm text-[#303237] dark:text-foreground font-semibold">
                Description
              </span>
              <div className=" grid">
                <span className=" text-sm text-[#303237]">
                  Satoshi, un artist emergent din Republica Moldova, a captat
                  atenția publicului cu piesele sale vibrante, precum „Caștile
                  Mele”, „Mama Mi-a Spus” și „N...
                </span>
                <Link href={"#"} className=" text-[#376FFF] text-sm">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-24 w-full bg-white dark:bg-foreground py-2 shadow-md my-8 mt-auto px-6 md:px-36 flex items-center justify-between gap-2 ">
          <Button
            variant={"outline"}
            className=" text-sm text-black w-full"
            size={"sm"}
          >
            Share event
            <Share2 className=" text-[#376FFF] dark:text-foreground w-4 h-4" />
          </Button>
          <Button
            className=" text-sm text-[#ffffff] bg-[#303237] w-full"
            size={"sm"}
          >
            Share event
          </Button>
        </div>
      </div>
    </Fragment>
  );
}

import GradientText from "@/components/gradientText";
import Image from "next/image";
import ScheduleImage from "@/assets/images/projects 7(1).png";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";

const ScheduledHours = () => {
  return (
    <Reveal>
      <div className="bg-pink-50 p-5 md:p-10" id="workHours">
        <div className="flex flex-col gap-8 md:flex-row md:gap-10">
          <div>
            <Image
              src={ScheduleImage}
              alt=""
              className="h-auto w-full object-cover"
              width={767}
              height={503}
            />
          </div>
          <div className="bg-white p-5 flex flex-col space-y-5 w-full">
            <div className="space-y-5">
              <GradientText
                text="Scheduled Hours"
                className="font-dm-sans font-medium text-[35px]! tracking-[-8%]!"
              />
              <p
                className="text-[#8D8D8D] font-satoshi text-[16px] md:text-[20px]"
                style={{ letterSpacing: "-4%" }}
              >
                Call us 24/7 with any emergency or to schedule an appointment
                and check our availability.
              </p>
            </div>
            <hr />
            <div
              className="flex flex-col sm:flex-row justify-between gap-2 text-[18px] md:text-[25px] items-start sm:items-center border-y-border border py-3 text-[#181818]"
              style={{ letterSpacing: "-4%", lineHeight: "120%" }}
            >
              <p className="text-[#8D8D8D]">Monday - Friday</p>
              <p>09:00AM - 05:00PM</p>
            </div>
            <hr />
            <Button
              className="py-2.5 px-7.5 h-14 md:h-17.5 w-full sm:w-fit rounded-full text-black uppercase bg-[#EFBF04] hover:bg-[#EFBF04]/90 font-semibold"
              asChild
            >
              <Link href="https://cal.com" target="_blank">
                Get Appointment <ArrowRightIcon />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ScheduledHours;

import { PhoneOutgoing, MailOpen, MapPin } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";

interface ContactProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  contentOne: string;
  contentTwo?: string;
}

const content: ContactProps[] = [
  {
    icon: PhoneOutgoing,
    title: "Hotline Number",
    contentOne: "PHONE : 09033899576",
    contentTwo: "WHATSAPP : (+234) 123 678 900",
  },
  {
    icon: MailOpen,
    title: "Support Email",
    contentOne: "nohenconstruct@gmail.com",
  },
  {
    icon: MapPin,
    title: "Office Address",
    contentOne: "116 road 6th Avenue, Gwarimpa estate, FCT, Abuja.",
  },
];

const ContactCardF = () => {
  return (
    <Reveal>
      <Stagger className="flex  items-center justify-center py-10 gap-5 bg-pink-50">
        {content.map((c, index: number) => (
          <StaggerItem key={index}>
            <ContactCards
              title={c.title}
              icon={c.icon}
              contentOne={c.contentOne}
              contentTwo={c.contentTwo}
            />
          </StaggerItem>
        ))}
      </Stagger>
    </Reveal>
  );
};

function ContactCards({
  icon: Icon,
  title,
  contentOne,
  contentTwo,
}: ContactProps) {
  return (
    <div className="text-black w-105 min-h-86 max-h-86.75 bg-white flex flex-col space-y-8 items-center py-10">
      <div className="h-full w-full flex flex-col items-center justify-between space-y-5">
        <div className="h-20.5 w-20.5 bg-[#FAFAFA] rounded-full flex items-center justify-center">
          <Icon color="#8D8D8D" />
        </div>
        <h5
          className="font-dm-sans font-medium text-[40px]"
          style={{ letterSpacing: "-8%", lineHeight: "114.99999999999999%" }}
        >
          {title}
        </h5>
        <div className="flex flex-col justify-start flex-1 w-full h-full">
          <div
            className="font-satoshi text-[#8D8D8D] space-y-3 w-4/5 mx-auto text-[20px] text-center"
            style={{ letterSpacing: "-4%", lineHeight: "118%" }}
          >
            <p>{contentOne}</p>
            <p>{contentTwo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCardF;


import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { LocateOffIcon } from "lucide-react";
// Data for Footer Component
export const DFooter = {
  OuickLink: [
    {
      url: "/Services",
      title: "Services",
    },
    {
      url: "/Web-Development",
      title: "Web Development",
    },
    {
      url: "/Mobile-App-Development",
      title: "Mobile App Development",
    },
    {
      url: "/Digital-Marketing",
      title: "Digital Marketing",
    },
  ],
  OfficeLocation: [
    {
      title: "In front of Water Way, New Cairo 1, Cairo, Egypt",
      icons: <LocateOffIcon />,
    },
    {
      title: "contact@developnetwork.net",
      icons: <Mail />,
    },
    {
      title: "+201002135592",
      icons: <Phone />,
    },
  ],
};

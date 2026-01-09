import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
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
      icons: <FaLocationDot />,
    },
    {
      title: "contact@developnetwork.net",
      icons: <IoMail />,
    },
    {
      title: "+201002135592",
      icons: <FaPhoneAlt />,
    },
  ],
};

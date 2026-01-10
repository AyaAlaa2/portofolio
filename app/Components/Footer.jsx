import Link from "next/link";
import { DFooter } from "./data/data";

const Footer = () => {
  return (
    <footer className="footer relative h-100">
      <div className="absolute inset-0 bg-[#000000B3]"></div>

      <div className="relative z-10 flex flex-row items-center justify-center py-10  text-white">
        <div className="relative z-10 flex flex-col items-center justify-center py-10  text-white">
          <span className="text-3xl mb-5"> Quick Links</span>
          {DFooter.OuickLink.map((e, i) => (
            <div key={i}>
              <Link href={e.url}>{e.title}</Link>
            </div>
          ))}
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center py-10  text-white">
          <span className="text-3xl mb-5">Office Location</span>
          {DFooter.OfficeLocation.map((e, i) => (
            <div className="flex flex-row justify-center items-center" key={i}>
              <span className="text-xl">{e.icons}</span>
              <span className="text-xl">{e.title}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

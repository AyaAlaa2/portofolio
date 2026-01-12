import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
const ContactFixed = () => {
  return (
    <>
      <div className="fixed bottom-2 right-2 z-50 flex flex-col space-y-2">
        <a
          href="https://wa.me/923000000000"
          className="bg-[#25D366] p-3 rounded-full mr-2"
        >
          <FaWhatsapp className="text-white" />
        </a>
        <a
          href="tel:+923000000000"
          className="bg-blue-700 p-3 rounded-full mr-2"
        >
          <FaPhoneAlt className="text-white" />
        </a>
      </div>
    </>
  );
};

export default ContactFixed;

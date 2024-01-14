import React from "react";
import { FiMail } from "react-icons/fi";
import { SiTelegram, SiWhatsapp } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full h-full min-h-screen p-20" id="contact">
      <div className="flex items-center">
        <div className="border-b-2 border-red">
          <h1 className="text-[80px] text-gray-300">Let&#39;s Work Together</h1>
        </div>
      </div>
      <div className="pt-3 flex ">
        <div className="flex items-start flex-col md:flex-row md:item-center">
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=grand1310marcell@gmail.com"
            className="flex items-center z-[50]"
            target="_blank"
          >
            <FiMail size={50} color="white" />
            <span className="text-gray-200 pl-2 text-xl">
              grand1310marcell@gmail.com
            </span>
          </a>
          <a
            className="flex items-center z-[50] py-4 md:px-4 md:py-0"
            href="https://wa.me/+628872059062"
            target="_blank"
          >
            <SiWhatsapp size={50} color="white" />
            <span className="text-gray-200 pl-2 text-xl">+62 887 2059 062</span>
          </a>
          <a
            className="flex items-center z-[50]"
            href="https://t.me/+628872059062"
            target="_blank"
          >
            <SiTelegram size={50} color="white" />
            <span className="text-gray-200 pl-2 text-xl">+62 887 2059 062</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className=" text-gray-400 py-4">
      <div className="flex justify-center space-x-4 text-2xl">
        <a
          href="https://github.com/Kirancodernew?tab=repositories"
          className="hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/princekiran/"
          className="hover:text-white"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:saikiran.rathod1405@gmail.com"
          className="hover:text-white"
        >
          <SiGmail />
        </a>
      </div>
      <p className="text-center mt-4">
        © 2024 Kiran Music Website. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

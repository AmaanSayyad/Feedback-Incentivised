import React from "react";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-800 text-white py-8 mt-5 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="flex items-center">
          <li>
            <div className="cursor-pointer w-[60%] md:w-[40%] flex items-center">
              <Link to="/">
                <li>
                  <img src="./first.png" alt="logo" className=" w-110 mb-4" />
                </li>
              </Link>
            </div>
          </li>
        </Link>

        <div>
          <h2 className="text-xl font-semibold">Follow Us</h2>
          <div className="mt-2 flex space-x-4">
            <a href="mailto:Surakshaonepvt@gmail.com?Subject=Regarding Disease">
              <MdMarkEmailRead className="w-6 h-6 text-indigo-500" />
            </a>
            <a href="https://www.linkedin.com/company/surakshaone/">
              <BsLinkedin className="w-5 h-5 text-indigo-500 mx-3" />
            </a>
            <a href="https://www.facebook.com/surakshaone?mibextid=ZbWKwL">
              <BsFacebook className="w-5 h-5 text-indigo-500 mx-1" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>
          &copy; {new Date().getFullYear()} Feedback Incentivized. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

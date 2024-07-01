import React from "react";
import { Link } from "react-scroll";
const Navlinks = ({ href, link }) => {
  return (
    <li className="list-none cursor-pointer mr-8    ">
      <Link
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="trasition-all duration-300"
      >
        {link}
      </Link>
    </li>
  );
};

export default Navlinks;

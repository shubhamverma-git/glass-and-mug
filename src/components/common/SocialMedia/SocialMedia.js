import React from "react";
import classes from "./SocialMedia.module.scss";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

function SocialMedia({ customClass }) {
  return (
    <div className={`${classes.container} ${customClass}`}>
      {socialMedia?.map((i, idx) => (
        <React.Fragment key={idx}>
          {i.link && (
            <Link target="_blank" href={i.link}>
              {i.logo}
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default SocialMedia;

const socialMedia = [
  { link: "https://www.linkedin.com", logo: <FaLinkedinIn /> },
  { link: "https://www.twitter.com", logo: <RiTwitterXFill /> },
  { link: "https://www.instagram.com", logo: <AiOutlineInstagram /> },
  { link: "https://www.facebook.com", logo: <AiFillFacebook /> },
];

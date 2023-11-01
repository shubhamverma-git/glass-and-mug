import React from "react";
import Link from "next/link";
import classes from "./Footer.module.scss";
import SocialMedia from "../common/SocialMedia/SocialMedia";
import Subscribe from "../Subscribe/Subscribe";

export default function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.upper_container}>
        <div className={classes.left_container}>
          <div className={classes.name}>
            <h1>Osmic Glass</h1>
          </div>
          <div className={classes.desc}>
            <p>
              Our vision is to provide convenience and help increase your sales
              business, Our vision is to provide convenience and help increase
              your sales business.
            </p>
          </div>
          <div className={classes.subscribe}>
            <p>Subscribe to our newsletter</p>
            <div className={classes.input_container}>
              <Subscribe customClass={classes.subscribe_btn} />
            </div>
          </div>
        </div>
        <div className={classes.right_container}>
          <div className={classes.page_links}>
            <div className={classes.title}>
              <h2>Quick Links</h2>
            </div>
            <div className={classes.links}>
              {linkPages.map((i, idx) => (
                <Link key={idx} href={i.lnk}>
                  {i.name}
                </Link>
              ))}
            </div>
          </div>
          <div className={classes.address}>
            <div className={classes.address_title}>
              <h1>Address</h1>
            </div>
            <div className={classes.address_text}>
              <p>233/21, New Abadi,</p>
              <p>Bhim Nagar Near Suhag</p>
              <p>Nagar Sec-2,</p>
              <p>Firozabad, Uttar Pradesh </p>
              <p>283203</p>
            </div>
          </div>
          <div className={classes.contact}>
            <div className={classes.contact_title}>
              <h1>Contact us</h1>
            </div>
            <div className={classes.phone_email}>
              <p>Phone : +91 79068 79810</p>
              <p> E-mail : loremipsum@osmicglass.com</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={classes.lower_container}>
        <div className={classes.social_media}>
          <SocialMedia />
        </div>
        <div className={classes.rights}>
          <p>©2022 Osmic Glass. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

const linkPages = [
  {
    name: "Home",
    lnk: "/",
  },
  {
    name: "About",
    lnk: "/about",
  },
  {
    name: "Our Products",
    lnk: "/products",
  },
  {
    name: "Contact Us",
    lnk: "/contact",
  },
  {
    name: "Blogs",
    lnk: "/blogs",
  },
  {
    name: "Privacy Policy",
    lnk: "/privacy_policy",
  },
  {
    name: "Terms and Conditions",
    lnk: "/tnc",
  },
];

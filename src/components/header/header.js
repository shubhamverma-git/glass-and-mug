"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import classes from "./header.module.scss";
import Button from "../common/Buttons/Button/Button";
import MobMenuIcon from "./MobMenuIcon";
import useScrollDirection from "@/hooks/useScrollDirection";
import Image from "next/image";
import Logo from "@/assets/images/Header/Logo.svg";

export default function Header() {
  const [mobView, setMobView] = useState(false);
  const scrollDirection = useScrollDirection();

  const clickHandler = () => {
    setMobView((p) => !p);
  };

  useEffect(() => {
    const headerSection = document.getElementById("large_nav");
    if (scrollDirection === "down") {
      headerSection.classList.remove(classes.show);
      headerSection.classList.add(classes.hide);
    } else {
      headerSection.classList.remove(classes.hide);
      headerSection.classList.add(classes.show);
    }
  }, [scrollDirection]);

  return (
    <header className={classes.container} id="large_nav">
      <div className={classes.logoContainer}>
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            width={100}
            height={100}
            className={classes.header_img}
          />
        </Link>
      </div>
      <div className={classes.desk_view_container}>
        <ul className={classes.desk_menu_container}>
          {pageLink.map((i, idx) => (
            <li key={idx}>
              <Link href={i.link}>{i.name}</Link>
            </li>
          ))}
          <Link href={"/contact"}>
            <Button name="Contact now" customClass={classes.enquire_btn} />
          </Link>
        </ul>
      </div>
      <button onClick={clickHandler} className={classes.mob_container}>
        <MobMenuIcon onClick={() => setMobView((p) => !p)} />
      </button>
      {/* {setMobView && (
        <div className={classes.mob_view_container}>
          <ul className={classes.mob_menu_container}>
            {pageLink.map((i, idx) => (
              <li onClick={clickHandler} key={idx}>
                <Link href={i.link}>{i.name}</Link>
              </li>
            ))}
            <Link href={"/contact"}>
              <Button name="Contact now" customClass={classes.enquire_btn} />
            </Link>
          </ul>
        </div>
      )} */}
    </header>
  );
}

const pageLink = [
  { link: "/", name: "Home" },
  { link: "/about", name: "About us" },
  { link: "/products", name: "Our Products" },
  { link: "/blogs", name: "Blogs" },
];

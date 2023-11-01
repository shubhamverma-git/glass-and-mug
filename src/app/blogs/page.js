"use client";

import React from "react";
import classes from "./Blogs.module.scss";
import HeroContainer from "@/components/home/hero/hero";
import BlogCard from "@/components/Cards/BlogCard/BlogCard";
import Blog1 from "@/assets/images/Card/Blog/Blog1.png";
import Blog2 from "@/assets/images/Card/Blog/Blog2.png";
import Blog3 from "@/assets/images/Card/Blog/Blog3.png";
import Blog4 from "@/assets/images/Card/Blog/Blog4.png";
import { getBlogData } from "@/services/blogPageService";

async function Blogs() {
  // const data = await getData();
  return (
    <div className={classes.container}>
      <HeroContainer customClass={classes.hero_container} />
      <div className={classes.recent_blogs_container}>
        <h1>Recent blog posts</h1>
        <div className={classes.recent_blogs}>
          <div className={classes.left_container}>
            {/* <BlogCard cardDetails={cardData1} customClass={classes.blog} /> */}
          </div>
          <div className={classes.right_container}>
            {/* <BlogCard cardDetails={cardData2} customClass={classes.blogs} /> */}
            {/* <BlogCard cardDetails={cardData3} customClass={classes.blogs} /> */}
          </div>
        </div>
      </div>
      <div className={classes.all_blogs_container}>
        <h1>All blog posts</h1>
        <div className={classes.all_blogs}>
          {/* <BlogCard cardDetails={cardData4} customClass={classes.blg} /> */}
        </div>
      </div>{" "}
      */
    </div>
  );
}

export default Blogs;

// async function getData() {
//   return await getBlogData().then((res) => res.data.data.attributes);
// }

const cardData1 = {
  src: Blog1,
  alt: "",
  height: 220,
  width: "100vw",
  name: "Olivia Rhye ",
  date: "1 Jan 2023",
  title: "UX review presentations",
  question:
    "How do you create compelling presentations that wow your colleagues and impress your managers?",
};

const cardData2 = {
  src: Blog2,
  alt: "",
  height: 100,
  width: "100vw",
  name: "Phoenix Baker ",
  data: "1 Jan 2023",
  title: "Migrating to Linear 101",
  question:
    "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
};

const cardData3 = {
  src: Blog3,
  alt: "",
  height: 100,
  width: "100vw",
  name: "Lana Steiner",
  data: "1 Jan 2023",
  title: "Building your API Stack",
  question:
    "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
};

const cardData4 = {
  src: Blog4,
  alt: "",
  height: 100,
  width: "100vw",
  name: "Alec Whitten",
  data: "1 Jan 2023",
  title: "How collaboration makes us better designers",
  question:
    "Collaboration can make our teams stronger, and our individual designs better.",
};

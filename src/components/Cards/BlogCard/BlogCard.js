import React from "react";
import classes from "./BlogCard.module.scss";
import Image from "next/image";
import Arrow from "./Arrow";

function BlogCard({ cardDetails, customClass }) {
  return (
    <div className={`${classes.container} ${customClass}`}>
      <div className={`${classes.cardImage} ${customClass}`}>
        <Image
          src={cardDetails?.src}
          alt={cardDetails?.alt}
          height={cardDetails?.height}
          width={cardDetails?.width}
          className={`${classes.img} ${customClass}`}
        />
      </div>
      <div className={`${classes.description} ${customClass}`}>
        <div className={`${classes.name} ${customClass}`}>
          <h1>{cardDetails?.name}</h1>
          <h1>{cardDetails?.date}</h1>
        </div>
        <div className={`${classes.details} ${customClass}`}>
          <div className={`${classes.headline} ${customClass}`}>
            <h1>{cardDetails?.title}</h1>
            <Arrow className={`${classes.icon} ${customClass}`} />
          </div>
          <div className={`${classes.qstn} ${customClass}`}>
            <p>{cardDetails?.question}</p>
          </div>
          <div className={`${classes.categories} ${customClass}`}>
            {categoryList.map((i, idx) => (
              <div key={idx}>
                <ul>
                  <li>{i.item}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

const categoryList = [{ item: "Design" }, { item: "Research" }];

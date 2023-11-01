"use client";

import React, { useEffect } from "react";
import classes from "./ProductCard.module.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "@/components/common/Buttons/Button/Button";
import PillContainer from "@/components/common/PillContainer/PillContainer";
import Link from "next/link";
import { useRouter } from "next/navigation";

function ProductCard({ customClass, title, materials, onClick }) {
  const path = usePathname();
  const router = useRouter();

  return (
    <div className={`${classes.container} ${customClass}`}>
      <Image
        src="https://thedecorkart.com/cdn/shop/files/009A9930_e2aeafbc-9c51-46ae-8cf9-b73331be97a8.jpg?v=1692602369"
        alt="product image"
        width={500}
        height={500}
        className={classes.img}
      />
      <div className={classes.header}>
        <h1>{title}</h1>
        <PillContainer
          pillDetails={materials}
          customClass={classes.pillContainer}
          pillClass={classes.pillTitle}
        />
      </div>
      <div className={classes.btn_container}>
        {/* <Link href={`/product_details/${item?.id}`}> */}
        <Button
          name="Enquire now"
          onClick={() => router.push(`/product_details/${item?.id}`)}
          customClass={classes.btn}
        />
        {/* </Link> */}
      </div>
    </div>
  );
}

export default ProductCard;

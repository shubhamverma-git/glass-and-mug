"use client";
import React, { useRef, useState } from "react";
import Button from "../common/Buttons/Button/Button";
import { subscribe } from "@/services/enquiryService";

const Subscribe = ({ customClass }) => {
  const [isSending, setIsSending] = useState({ status: false, message: null });
  const emailRef = useRef(null);

  const emailSubmitHandler = async (e) => {
    setIsSending({ status: true, message: "Sending" });
    e.preventDefault();
    const response = await subscribe({ email: emailRef.current.value });
    if (response.status == 200) {
      setIsSending({ status: false, message: "Thanks" });
      setTimeout(() => {
        setIsSending({ status: false, message: null });
      }, 2000);
    }
  };

  return (
    <>
      {!isSending.status && isSending.message == "Thanks" ? (
        <div>{isSending.message}</div>
      ) : (
        !isSending.status &&
        isSending.message === null && (
          <form onSubmit={emailSubmitHandler} style={{ display: "flex" }}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              ref={emailRef}
              style={{ width: "70%" }}
            />
            <Button name="Subscribe" type="submit" customClass={customClass} />
          </form>
        )
      )}
    </>
  );
};

export default Subscribe;

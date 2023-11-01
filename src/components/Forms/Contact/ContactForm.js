"use client";
import React, { useRef, useState } from "react";
import classes from "./ContactForm.module.scss";
import { usePathname } from "next/navigation";
import Upload from "./Upload/Upload";
import Button from "@/components/common/Buttons/Button/Button";
import { useForm } from "react-hook-form";
import { enquiryForm } from "@/services/enquiryService";

function ContactForm({ customClass, hasUpload, page }) {
  const path = usePathname();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [uploadItem, setUploadItem] = useState({ item: null, loading: false });
  const [submitted, setSubmitted] = useState(false);
  const countryCodeRef = useRef(null);

  const submitHandler = async (data) => {
    if (uploadItem?.item?.data) {
      const formData = {
        ...data,
        file_url: `https://osmicglass.droot.in${uploadItem?.item?.data[0].url}`,
        phone: countryCodeRef.current.value + data.phone,
      };

      const formResponse = await enquiryForm(formData);
      if (formResponse.status === 200) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      }
    } else {
      const formData = {
        ...data,
        file_url: ``,
        phone: countryCodeRef.current.value + data.phone,
      };
      const formResponse = await enquiryForm(formData);
      if (formResponse.status === 200) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      }
    }
    reset();
  };

  return (
    <div className={`${classes.container} ${customClass}`}>
      {(path === "/contact" || path === "/") && <h1>Contact us</h1>}
      <form
        onSubmit={handleSubmit(submitHandler)}
        className={`${classes.contact_form} ${customClass}`}
      >
        <div className={classes.name}>
          <div className={classes.fname}>
            <label htmlFor="fname">Enter your first name</label>
            <input
              type="text"
              {...register("fname", {
                required: true,
                pattern: /^[a-zA-Z]+$/i,
                minLength: 3,
                maxLength: 48,
              })}
              id="fname"
              placeholder="First Name"
              className={errors.fname && classes.errors}
              autoComplete="off"
            />
          </div>
          <div className={classes.lname}>
            <label htmlFor="lname">Enter your last name</label>
            <input
              type="text"
              {...register("lname", {
                required: true,
                pattern: /^[a-zA-Z]+$/i,
                minLength: 3,
                maxLength: 48,
              })}
              id="lname"
              placeholder="Last Name"
              className={errors.lname && classes.errors}
              autoComplete="off"
            />
          </div>
        </div>
        <div className={classes.contact}>
          <div className={classes.email}>
            <label htmlFor="email">Enter your email address</label>
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                minLength: 8,
                maxLength: 48,
              })}
              id="email"
              placeholder="Email Address"
              className={errors.email && classes.error_content}
              autoComplete="off"
            />
          </div>
          <div className={classes.phone}>
            <label htmlFor="phone">Enter your phone number</label>
            <div
              className={`${classes.country_code_container}`}
              style={{
                overflow: "hidden",
                border: errors.phone && "1px solid red",
                borderRadius: "4px",
              }}
            >
              <select className={classes.country_code} ref={countryCodeRef}>
                {countryCodeArray &&
                  countryCodeArray?.map((item, index) => (
                    <option
                      className={classes.country_option}
                      value={item?.code}
                    >
                      {item?.name}
                    </option>
                  ))}
              </select>
              <input
                type="tel"
                {...register("phone", {
                  required: true,
                  pattern: /^[0-9]+$/i,
                  minLength: 10,
                  maxLength: 10,
                })}
                id="phone"
                placeholder="9876543210"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        <div className={classes.message_textarea}>
          <label htmlFor="message">Enter your message</label>
          <textarea
            {...register("message", {
              required: true,
              maxLength: 200,
            })}
            name="message"
            id="message"
            placeholder="Enter your message"
            className={classes.msg_text}
            autoComplete="off"
          />
        </div>

        {hasUpload && <Upload setUploadItem={setUploadItem} />}

        <div
          className={classes.btn_container}
          style={{ justifyContent: page === "product_details" && "flex-end" }}
        >
          {submitted ? (
            <div>Thanks</div>
          ) : (
            <Button
              name="Submit"
              type="submit"
              status={uploadItem.loading}
              customClass={classes.btn}
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

const countryCodeArray = [
  {
    name: "IND",
    code: "+91",
  },
  {
    name: "US",
    code: "+1",
  },
  {
    name: "UK",
    code: "+21",
  },
  {
    name: "AUS",
    code: "+82",
  },
  {
    name: "UAE",
    code: "+61",
  },
];

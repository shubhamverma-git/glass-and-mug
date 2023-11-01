import React from "react";
import classes from "./Upload.module.scss";
import { useForm } from "react-hook-form";
import UploadIcon from "@/assets/icons/UploadIcon/UploadIcon";
import { uploadItem } from "@/services/enquiryService";

function Upload({ setUploadItem }) {
  const formData = new FormData();
  async function fileSelector(e) {
    if (e.target.files[0]) {
      setUploadItem({ item: null, loading: true });
      formData.append("files", e.target.files[0]);
      const item = await uploadItem(formData);
      setUploadItem({ item: item, loading: false });
    }
  }

  return (
    <div className={classes.upload_box}>
      <label className={classes.container_text}>
        <p>Upload your product design file</p>
      </label>
      <div className={classes.upload_div}>
        <input
          type="file"
          onChange={(e) => fileSelector(e)}
          onBlur={(e) => (e.target.value = null)}
        />
        <div className={classes.upload_portfolio}>
          <UploadIcon />
          <div className={classes.upload_text}>
            <p>Select a file or drag and drop here</p>
            <p>JPG, PNG or PDF, AutoCAD file size</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;

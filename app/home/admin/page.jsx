"use client";
import axios from "axios";
import { useEffect, useState } from "react";
const admin = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const submit = async () => {
    if (!file) {
      console.log("No file here");
    } else {
      var formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", `revamp`);
      axios
        .post("https://api.cloudinary.com/v1_1/dq1m3buf0/upload", formData)
        .then((res) => {
          console.log(res.data);
          setImageUrl(res.data.secure_url);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} name="image" />
      <button onClick={() => submit()}>Submit</button>
      {imageUrl && (
        <img style={{ width: "100%", borderRadius: "1rem" }} src={imageUrl} />
      )}
    </div>
  );
};

export default admin;

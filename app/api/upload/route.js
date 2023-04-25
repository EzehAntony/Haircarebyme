import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();
  const { formData, uploadPreset } = await res.data;
  console.log(uploadPreset);
  axios
    .post(
      `https://api.cloudinary.com/v1_1/${process.env.cloudName}/upload`,
      res.data
    )
    .then((res) => {
      console.log(res);
      return NextResponse.json({ res });
    })
    .catch((err) => {});
}

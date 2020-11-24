import React, { useEffect } from "react";
import { sampleGet } from "../../http/sample";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    const http: string | undefined = process.env.REACT_APP_HTTP;
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

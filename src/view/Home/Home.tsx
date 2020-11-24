import React, { useEffect } from "react";
import { sampleGet } from "../../http/sample";

export default function Home() {
  useEffect(() => {
    sample();
  }, []);
  async function sample() {
    const data = await sampleGet().then((res) => res);
    console.log(data);
  }
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

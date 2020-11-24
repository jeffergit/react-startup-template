import axios from "axios";

export const sampleGet = async () => {
  try {
    const res = await axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => res.data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

import { useState } from "react";
import axios from "axios";
export default function ReactContact() {
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const postData = async (e) => {
    const { name, email, password } = data;
    const res = await axios(
      // "https://firstformtesting-default-rtdb.firebaseio.com/userdata.json",
      {
        method: "post",
        headers: {
          "Content-type": "aplication/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      }
    );
  };

  const getUserData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  // console.log(data);
  return (
    <>
      <form method="post">
        <input
          value={data.name}
          onChange={getUserData}
          type="text"
          placeholder="name"
          name="name"
        />
        <br />
        <br />
        <input
          value={data.email}
          onChange={getUserData}
          type="text"
          placeholder="email"
          name="email"
        />
        <br />
        <br />
        <input
          value={data.password}
          onChange={getUserData}
          type="text"
          placeholder="password"
          name="password"
        />
        <br />
        <br />
        <button onClick={postData}>submit</button>
      </form>
    </>
  );
}

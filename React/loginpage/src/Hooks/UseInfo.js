import React, { useState } from "react";

const UseInfo = () => {
  const [value, setValue] = useState("");
  const Info = (e) => setValue(e.target.value);
  return [value, Info];
};

export default UseInfo;

import { useEffect, useState } from "react";
import { add , infiniteSum, sendEmail} from "./Currying.js";
// const add = (a) => (b) => (c) => a + b + c;

function Currying() {
  const [value, setValue] = useState("");
  useEffect(() => {
    // setValue(add(1)(2)(3));
    // setValue(sendEmail("jaishree")("pooja")("i am your older sister"));
    setValue(infiniteSum(1)(2)(3)(4)(5)())
  });

  return (
    <>
      <div>{value}</div>
    </>
  );
}

export default Currying;

import React from "react";
interface IProps {
  name?: string;
  age?: number;
  address?: string;
}
const Video13 = (props: IProps) => {
  // props là javascript object

  const person = {
    name: "Eric",
    age: 25,
    address: "Hoi Dan IT",
  };

  const { name = "Hỏi Dân IT", age, address } = props;

  return <div>Example in video 13 - hellp word with {name}</div>;
};

export default Video13;

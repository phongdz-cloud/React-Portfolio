import React, { useState } from "react";

const Video9 = () => {
  const [name, setName] = useState<string>("Hỏi dân IT");
  return <div>Example video 9: helllo word + {name}</div>;
};

export default Video9;

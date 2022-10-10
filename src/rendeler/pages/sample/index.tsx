import { FC, useState } from "react";
import { Link } from "react-router-dom";

const Sample: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Count</button>
      <br />
      <Link to="/sample2">Sample2</Link>
    </div>
  );
};

export default Sample;

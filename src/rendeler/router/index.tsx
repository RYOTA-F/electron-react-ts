import { FC } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
/** components **/
import Sample from "../pages/sample";
import Sample2 from "../pages/sample2";

const Router: FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Sample />} />
        <Route path="/sample2" element={<Sample2 />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;

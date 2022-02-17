import React from "react";
import "./style.less";

const FistComponent = () => {
  const a = (b:number) => {
    console.log(b);
  };
  
  console.log(1);
  a(1);

  return <div className="first-component">第一个组件</div>;
};

export default FistComponent;

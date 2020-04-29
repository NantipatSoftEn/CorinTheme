import React, { Component } from "react";
import Main from "../views/layout/Main";

const generateMain = (Component) => {
  const WrappedMain = (props) => {
    return (
      <Main>
        <Component {...props} />
      </Main>
    );
  };
  return WrappedMain;
};

export default generateMain;

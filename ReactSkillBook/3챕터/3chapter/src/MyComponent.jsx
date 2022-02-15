import React from "react";
import propTypes from "prop-types";

const MyComponent = ({ name, children }) => {
  return (
    <div>
      컴포넌트 {name}
      children 값 {children}
    </div>
  );
};

MyComponent.propTypes = {
  name: propTypes.string.isRequired,
};

export default MyComponent;

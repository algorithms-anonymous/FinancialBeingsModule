// @flow

import React from "react";

type PropsT = {
  placeholder?: any,
  type: string,
  styleOfButton?: any,
  disabledBtn?: boolean,
  classDecorator?: string,
  icon?: string,
  onClick?: Function,
  iconClass?: string,
  iconAfter?: boolean
};

const Button = (props: PropsT) => {
  const {
    placeholder,
    type,
    onClick,
    disabledBtn,
    icon,
    iconClass,
    iconAfter
  } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabledBtn}
    >
      {icon &&
        !iconAfter && (
          <i className={`material-icons ${iconClass || ""}`}>{icon}</i>
        )}
      {placeholder || ""}
      {icon &&
        iconAfter && (
          <i className={`material-icons ${iconClass || ""}`}>{icon}</i>
        )}
    </button>
  );
};

export default Button;

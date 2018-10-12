// @flow

import React from "react";

type PropsT = {
  id: string,
  type: string,
  placeholder?: string,
  disabled?: boolean,
  className?: string,
  defaultValue?: any,
  onKeyDown?: Function,
  max?: number,
  min?: number,
  input: any,
  placeholder?: string,
  meta: {
    error: string,
    touched: boolean
  },
  label?: string,
  containerClassName?: string,
  labelClassName? : string,
  container? : boolean
};

const Input = (input: PropsT) => {
  const props = input.input;
  const {
          id,
          type,
          disabled,
          defaultValue,
          max,
          min,
          placeholder,
          meta: { touched, error },
          label,
        } = input;
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        {...props}
        placeholder={placeholder}
        type={type}
        id={id}
        disabled={disabled}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step=".01"
      />
      {touched && (error && <span>{error}</span>)}
    </div>
  );
};

export default Input;

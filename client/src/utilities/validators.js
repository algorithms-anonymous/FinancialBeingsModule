// @flow

export const required = (value?: string) =>
  value ? undefined : "This field is required";

export const number = (value: string) => {
  if (value === undefined || value === null) {
    return undefined;
  }

  return value && !value.match(/^\d+$/) ? "Must be a number" : undefined;
};

export const notZero = (value: any) =>
  value === 0 ? "Amount can not be zero" : undefined;

export const phone = (value: string) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? "Please enter valid phone number"
    : undefined;

export const email = (value: string) => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Please enter valid email address"
    : undefined;
};

export const password = (value: string) => {
  if (value && value.indexOf(" ") > -1) {
    return "No spaces allowed";
  } else if (value && value.length < 8) {
    return "Minimum eight characters";
  }
  if (!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
    return "Include at least one uppercase and one lowercase letter and one number";
  }

  return undefined;
};

export const match = (value: string, toMatch: string) =>
  value !== toMatch ? "Passwords do not match" : undefined;

export const passwordsMatch = (values: {
  password?: string,
  passwordConfirm?: string
}) => {
  const errors = {};

  const valuesPassword = values.password;
  const valuesPasswordRepeat = values.passwordConfirm;

  if (valuesPassword && valuesPasswordRepeat) {
    errors.passwordConfirm = match(valuesPassword, valuesPasswordRepeat);
  }
  return errors;
};

export const min = (value: number, minVal: number, message?: string) =>
  value && value < minVal ? message || `Min ${minVal}` : undefined;

export const max = (value: number, maxVal: number, message?: string) =>
  value && value > maxVal ? message || `Max ${maxVal}` : undefined;

export const minlen = (value: string, minLen: number) =>
  value && value.length < minLen
    ? `Must be at least ${minLen} characters or more`
    : undefined;

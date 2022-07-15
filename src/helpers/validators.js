// export const required = (val) => !!val;
//
// export const minLength = (length) => (val) => val.length >= length;
export const required = (val) => {
  const isValid = !!val;
  return {
    isValid,
    error: !isValid ? "Field is required" : ""
  };
};

export const minLength = (length) => (val) => {
  const isValid = val.length >= length;
  return {
    isValid,
    error: !isValid ? `Field length can't be less then ${length} symbols` : ""
  };
};

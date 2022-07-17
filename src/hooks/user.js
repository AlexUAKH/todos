export const useUser = () => {
  return {
    name: localStorage.getItem("user") || "user",
    authorized: JSON.parse(localStorage.getItem("authorized")) || false
  };
};

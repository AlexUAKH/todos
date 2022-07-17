export const useLogout = () => () => {
  localStorage.removeItem("user");
  localStorage.setItem("authorized", "false");
};

const login = false;

export const loginCheck = (to, from) => {
  if (!to.meta.auth) return true;
  if (login) return true;
  return "/login";
};

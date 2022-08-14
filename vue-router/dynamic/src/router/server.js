import routes from "./routes";

export const getRoutes = async () => {
  const premissions = await fetch("http://localhost:3003/permissions").then(
    (r) => r.json()
  );

  return routes.filter((route) => {
    return route.meta.premissions?.every(p => premissions.includes(p));
  });
};

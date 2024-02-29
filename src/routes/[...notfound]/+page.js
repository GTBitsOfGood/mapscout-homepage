export const load = ({ url }) => {
  throw redirect(301, "https://app.mapscout.io" + url.pathname);
};

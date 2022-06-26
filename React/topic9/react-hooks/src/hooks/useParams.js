export const useParams = () => {
  const pathname = window.location.pathname.split("/")[1].split("&");

  const newPArams = pathname.map((item) => {
    const key = item.split("=")[0];
    const value = item.split("=")[1];
    return {
      [key]: value,
    };
  });
  return { params: newPArams };
};

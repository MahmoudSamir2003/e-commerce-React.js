// export const url = "https://ecommerce-premium.herokuapp.com/api";
export const url = "http://127.0.0.1:8000";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};

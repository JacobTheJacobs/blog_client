import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const create = (category, token) => {
  console.log(category);
  const request = axios
    .post(
      `${BASE_URL}/category`,
      { name: category },
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(err));
  return request;
};

export const getCategories = () => {
  const request = axios
    .get(`${BASE_URL}/categories`)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => console.log(err));
  return request;
};

export const singleCategory = (slug) => {
  const request = axios
    .get(`${BASE_URL}/category/${slug}`)
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(err));
  return request;
};

export const removeCategory = (slug, token) => {
  const request = axios
    .delete(`${BASE_URL}/category/${slug}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(err));
  return request;
};

import axios from "axios";

const headerConfig = {
  headers: { Authorization: `bearer ${localStorage.getItem("auth")}` },
};

const getToken = () => {
  return localStorage.getItem("auth");
};

export const getAddress = async () => {
  const token = getToken();
  const result = await axios.get("http://localhost:6060/api/v1/address", {
    headers: { Authorization: `bearer ${token}` },
  });
  return result;
};

export const deleteAddress = async (id) => {
  const result = await axios.put(
    `http://localhost:6060/api/v1/address/delete/${id}`,
    {},
    headerConfig,
  );
  return result;
};

export const createAddress = async (data) => {
  const result = await axios.post(
    `http://localhost:6060/api/v1/address`,
    data,
    headerConfig,
  );
  return result;
};

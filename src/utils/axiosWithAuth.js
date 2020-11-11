import axios from "axios"

 const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token")

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "https://kick-starter-clone.herokuapp.com"
  });
};

export default axiosWithAuth



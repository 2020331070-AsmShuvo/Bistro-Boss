import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provides/AuthProvide";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      // console.log("Req stopped by interceptor");
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );

  // intercepts 401 and 403 sttus
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (err) {
      const status = err.responses.status;
      if (status == 401 || status == 403) {
        await logOut();
        navigate("/login");
      }
      // console.log("status error", err);
      return Promise.reject(err);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;

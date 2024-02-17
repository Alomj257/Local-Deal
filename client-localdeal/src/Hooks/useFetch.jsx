import { useEffect, useState } from "react";
import Axios from "../Axios";
const useFetch = (url) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const fetchdata = async () => {
    Axios.interceptors.request.use(
      function (config) {
        console.log("Request Headers:", config.headers);
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
    setloading(true);
    try {
      const res = await Axios.get(url);
      console.log(res);
      setdata(res.data);
    } catch (error) {
      seterror(error);
    }
    setloading(false);
  };
  useEffect(() => {
    fetchdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reFetch = async () => {
    setloading(true);
    try {
      const res = await Axios.get(url);
      console.log(res);
      setdata(res.data);
    } catch (error) {
      seterror(error);
    }
    setloading(false);
  };
  return { data, loading, error, reFetch };
};
export default useFetch;

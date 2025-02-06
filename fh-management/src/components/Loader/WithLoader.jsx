import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";

const WithLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : children;
};

export default WithLoader;

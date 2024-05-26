import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);

  return [menu, isLoading];
};
export default useMenu;

import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState();
  console.log("menu ", menu);
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

import React, { useEffect } from "react";
import manuCover from "../../../assets/menu/banner3.jpg";
import PageCover from "../../../Components/Cover/PageCover";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import desserImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
const Menu = () => {
  useEffect(() => {
    document.title = "Bistro Boss | Menu";
  }, []);

  const [menu] = useMenu();
  const dessert = menu?.filter((item) => item.category == "dessert");
  const pizza = menu?.filter((item) => item.category == "pizza");
  const soup = menu?.filter((item) => item.category == "soup");
  const salad = menu?.filter((item) => item.category == "salad");
  const offered = menu?.filter((item) => item.category == "offered");

  return (
    <div>
      <PageCover
        image={manuCover}
        title="Our Menu"
        desc="WOULD YOU LIKE TO TRY A DISH"
      />
      <SectionTitle
        heading="TOdays Offer"
        subHeading="Dont Miss Todays Offer"
      />
      <MenuCategory
        items={offered}
        title="offered"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore qui necessitatibus excepturi, dicta exercitationem cumque. Debitis nesciunt veritatis voluptas aliquam."
      />
      <MenuCategory
        items={dessert}
        image={desserImg}
        title="dessert"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore qui necessitatibus excepturi, dicta exercitationem cumque. Debitis nesciunt veritatis voluptas aliquam."
      />
      <MenuCategory
        items={pizza}
        image={pizzaImg}
        title="pizza"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore qui necessitatibus excepturi, dicta exercitationem cumque. Debitis nesciunt veritatis voluptas aliquam."
      />
      <MenuCategory
        items={soup}
        image={soupImg}
        title="soup"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore qui necessitatibus excepturi, dicta exercitationem cumque. Debitis nesciunt veritatis voluptas aliquam."
      />
      <MenuCategory
        items={salad}
        image={saladImg}
        title="salad"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore qui necessitatibus excepturi, dicta exercitationem cumque. Debitis nesciunt veritatis voluptas aliquam."
      />
    </div>
  );
};

export default Menu;
